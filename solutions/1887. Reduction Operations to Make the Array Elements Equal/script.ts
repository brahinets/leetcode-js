export {reductionOperations}

function reductionOperations(nums: number[]): number {
    nums = nums.sort((a: number, b: number): number => a - b)

    let count: number = 0
    let stepSize: number = 0

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            stepSize++
        }

        count += stepSize
    }

    return count
}
