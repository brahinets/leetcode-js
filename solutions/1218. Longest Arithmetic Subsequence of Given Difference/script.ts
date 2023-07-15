export {longestSubsequence}

function longestSubsequence(arr: number[], difference: number): number {
    const subsequenceCounts: Map<number, number>[] = [];
    let maxCount: number = 1;

    for (let end: number = 0; end < arr.length; end++) {
        subsequenceCounts[end] = new Map<number, number>();

        for (let start: number = 0; start < end; start++) {
            const diff: number = arr[end] - arr[start];
            const countByStart: number = subsequenceCounts[start].get(diff) ?? 1;
            const countByEnd: number = countByStart + 1;
            subsequenceCounts[end].set(diff, countByEnd);

            if (diff === difference) {
                maxCount = Math.max(maxCount, countByEnd);
            }
        }
    }

    return maxCount;
}
