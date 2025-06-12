export {maxAdjacentDistance}

function maxAdjacentDistance(nums: number[]): number {
    let maxDiff: number = 0

    for (let i = 0; i < nums.length; i++) {
        const nextIndex: number = (i + 1) % nums.length
        const diff: number = Math.abs(nums[i] - nums[nextIndex])

        maxDiff = Math.max(maxDiff, diff)
    }

    return maxDiff
}
