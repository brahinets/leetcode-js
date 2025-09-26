export {triangleNumber}

function triangleNumber(nums: number[]): number {
    let count: number = 0

    for (let i: number = 0; i < nums.length - 2; i++) {
        for (let j: number = i + 1; j < nums.length - 1; j++) {
            for (let k: number = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] > nums[k] && nums[i] + nums[k] > nums[j] && nums[j] + nums[k] > nums[i]) {
                    count++
                }
            }
        }
    }

    return count
}
