export {longestArithSeqLength}

function longestArithSeqLength(nums: number[]): number {
    let maxLength: number = 0;

    const subsequenceCounts: Map<number, number>[] = [];
    for (let end: number = 0; end < nums.length; end++) {
        subsequenceCounts[end] = new Map<number, number>();

        for (let start: number = 0; start < end; start++) {
            const diff: number = nums[start] - nums[end];
            const countByStart: number = subsequenceCounts[start].get(diff) ?? 1;
            const countByEnd: number = countByStart + 1;
            subsequenceCounts[end].set(diff, countByEnd)

            maxLength = Math.max(maxLength, countByEnd)
        }
    }

    return maxLength;
}
