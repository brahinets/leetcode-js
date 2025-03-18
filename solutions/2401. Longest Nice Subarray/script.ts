export {longestNiceSubarray}

function longestNiceSubarray(nums: number[]): number {
    let usedBits: number = 0
    let windowStart: number = 0
    let maxLength: number = 0

    for (let windowEnd: number = 0; windowEnd < nums.length; ++windowEnd) {
        while ((usedBits & nums[windowEnd]) != 0) {
            usedBits ^= nums[windowStart]
            windowStart++
        }

        usedBits |= nums[windowEnd]

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }

    return maxLength
}
