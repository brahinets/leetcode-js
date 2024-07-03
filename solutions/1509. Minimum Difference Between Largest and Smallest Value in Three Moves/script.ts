export {minDifference}

function minDifference(nums: number[]): number {
    if (nums.length <= 3) {
        return 0
    }

    nums.sort((a: number, b: number): number => a - b)

    let min: number = Number.MAX_SAFE_INTEGER
    for (let i = 0, j = nums.length - 3 - 1; i <= 3; i++, j++) {
        min = Math.min(min, nums[j] - nums[i])
    }

    return min
}
