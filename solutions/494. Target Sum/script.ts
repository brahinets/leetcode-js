export {findTargetSumWays}

function findTargetSumWays(nums: number[], target: number): number {
    return calculateWays(nums, 0, 0, target)
}

function calculateWays(
    nums: number[],
    currentIndex: number,
    currentSum: number,
    target: number
): number {
    if (currentIndex === nums.length) {
        return currentSum === target ? 1 : 0
    }

    const addWays: number = calculateWays(nums, currentIndex + 1, currentSum + nums[currentIndex], target)
    const subtractWays: number = calculateWays(nums, currentIndex + 1, currentSum - nums[currentIndex], target)

    return addWays + subtractWays
}
