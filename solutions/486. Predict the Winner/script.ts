export {PredictTheWinner}

function PredictTheWinner(nums: number[]): boolean {
    return maxDiff(nums) >= 0;
}

function maxDiff(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    const takeLeft: number = nums[0] - maxDiff(nums.slice(1))
    const takeRight: number = nums[nums.length - 1] - maxDiff(nums.slice(0, nums.length - 1))

    return Math.max(takeLeft, takeRight)
}
