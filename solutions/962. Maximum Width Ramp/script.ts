export {maxWidthRamp}

function maxWidthRamp(nums: number[]): number {
    const stack: number[] = []
    let result: number = 0

    for (let i: number = 0; i < nums.length; i++) {
        if (stack.length === 0 || nums[i] < nums[stack[stack.length - 1]]) {
            stack.push(i)
        }
    }

    for (let i: number = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[i] >= nums[stack[stack.length - 1]]) {
            result = Math.max(result, i - stack.pop()!)
        }
    }

    return result
}
