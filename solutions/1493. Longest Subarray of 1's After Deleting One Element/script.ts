export {longestSubarray}

function longestSubarray(nums: number[]): number {
    let maxCount: number = 0;

    for (let start: number = 0; start < nums.length; start++) {
        for (let end: number = start + 1; end <= nums.length; end++) {
            const counts: Map<number, number> = count(nums.slice(start, end));
            const allOnes: number = end - start;

            if (counts.get(1) && (counts.get(1) === allOnes - 1 || counts.get(1) === allOnes)) {
                maxCount = Math.max(allOnes - 1, maxCount)
            }
        }
    }

    return maxCount;
}

function count<Type>(nums: Type[]): Map<Type, number> {
    return nums.reduce((count: Map<Type, number>, num: Type) => {
        count.set(num, (count.get(num) || 0) + 1);
        return count;
    }, new Map<Type, number>());
}
