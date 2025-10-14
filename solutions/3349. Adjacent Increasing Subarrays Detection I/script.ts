export {hasIncreasingSubarrays}

function hasIncreasingSubarrays(nums: number[], k: number): boolean {
    let increment: number = 1
    let previousIncrement: number = 0
    let maxLen: number = 0

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            increment++
        } else {
            previousIncrement = increment
            increment = 1
        }

        maxLen = Math.max(maxLen, Math.max(Math.floor(increment / 2), Math.min(previousIncrement, increment)))

        if (maxLen >= k) {
            return true
        }
    }

    return false
}
