export {longestSubsequence}

function longestSubsequence(nums: number[]): number {
    const totalXor: number = getTotalXor(nums)

    if (totalXor !== 0) {
        return nums.length
    }

    const hasNonZeroElement: boolean = nums.some((num: number): boolean => num !== 0)

    if (hasNonZeroElement) {
        return nums.length - 1
    }

    return 0
}

function getTotalXor(nums: number[]): number {
    let totalXor: number = 0
    for (const num of nums) {
        totalXor ^= num
    }

    return totalXor
}
