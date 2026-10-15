export { sumCounts }

function sumCounts(nums: number[]): number {
    let total: number = 0

    for (let start: number = 0; start < nums.length; start++) {
        const distinctValues: Set<number> = new Set<number>()

        for (let end: number = start; end < nums.length; end++) {
            distinctValues.add(nums[end])
            total += distinctValues.size ** 2
        }
    }

    return total
}
