export { minimumDifference }

function minimumDifference(nums: number[], k: number): number {
    if (k === 1) {
        return 0
    }

    nums.sort((a: number, b: number): number => a - b)

    let minDifference: number = Infinity

    for (let windowStart = 0; windowStart <= nums.length - k; windowStart++) {
        const windowEnd: number = windowStart + k - 1
        const difference: number = nums[windowEnd] - nums[windowStart]

        minDifference = Math.min(minDifference, difference)
    }

    return minDifference
}
