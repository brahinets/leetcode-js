export {longestSubsequence}

function longestSubsequence(arr: number[], difference: number): number {
    const subsequenceCounts: Map<number, number> = new Map<number, number>()
    let maxCount: number = 1

    for (const num of arr) {
        const previous: number = num - difference
        const countByStart: number = subsequenceCounts.get(previous) ?? 0
        const countByEnd: number = countByStart + 1
        subsequenceCounts.set(num, countByEnd)

        maxCount = Math.max(maxCount, countByEnd)
    }

    return maxCount
}
