export {maxIncreasingSubarrays}

function maxIncreasingSubarrays(nums: number[]): number {
    let currentLen: number = 1
    let previousLen: number = 0
    let maxLen: number = 0

    for (let i: number = 1; i < nums.length; ++i) {
        if (nums[i] > nums[i - 1]) {
            currentLen++
        } else {
            previousLen = currentLen
            currentLen = 1
        }
        maxLen = Math.max(maxLen, Math.min(previousLen, currentLen))
        maxLen = Math.max(maxLen, Math.floor(currentLen / 2))
    }

    return maxLen
}
