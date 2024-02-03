export {PredictTheWinner}

function PredictTheWinner(nums: number[]): boolean {
    return maxDiff(nums, 0, nums.length - 1) >= 0
}

function maxDiff(nums: number[], left: number, right: number): number {
    if (left === right) {
        return nums[left]
    }

    const takeLeft: number = nums[left] - maxDiff(nums, left + 1, right)
    const takeRight: number = nums[right] - maxDiff(nums, left, right - 1)

    return Math.max(takeLeft, takeRight)
}
