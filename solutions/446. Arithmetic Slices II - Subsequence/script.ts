export {numberOfArithmeticSlices}

function numberOfArithmeticSlices(nums: number[]): number {
    let count: number = 0
    const memo: Map<number, number>[] = []

    for (let i: number = 0; i < nums.length; i++) {
        memo[i] = new Map<number, number>()

        for (let j: number = 0; j < i; j++) {
            const diff: number = nums[i] - nums[j]
            const prev: number = memo[j].get(diff) ?? 0
            const current: number = memo[i].get(diff) ?? 0

            count += prev
            memo[i].set(diff, prev + current + 1)
        }
    }

    return count
}
