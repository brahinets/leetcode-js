export {countBadPairs}

function countBadPairs(nums: number[]): number {
    let badPairs: number = 0

    const diffCount: Map<number, number> = new Map<number, number>()
    for (let pos: number = 0; pos < nums.length; pos++) {
        const diff: number = pos - nums[pos]
        const goodPairsCount: number = diffCount.get(diff) ?? 0

        badPairs += pos - goodPairsCount

        diffCount.set(diff, goodPairsCount + 1)
    }

    return badPairs
}
