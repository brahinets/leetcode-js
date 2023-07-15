export {longestSubsequence}

function longestSubsequence(nums: number[], difference: number): number {
    const subsequenceCounts: Map<number, number>[] = [];

    for (let end: number = 0; end < nums.length; end++) {
        subsequenceCounts[end] = new Map<number, number>();

        for (let start: number = 0; start < end; start++) {
            const diff: number = nums[end] - nums[start];
            const countByStart: number = subsequenceCounts[start].get(diff) ?? 1;
            const countByEnd: number = countByStart + 1;

            subsequenceCounts[end].set(diff, countByEnd);
        }
    }

    const countsByEnd: Map<number, number> = subsequenceCounts[subsequenceCounts.length - 1];
    for (const [diff, countWithDiff] of countsByEnd) {
        if (diff === difference) {
            return countWithDiff;
        }
    }

    return 1;
}
