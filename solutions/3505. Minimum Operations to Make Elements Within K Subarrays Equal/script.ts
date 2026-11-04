import { arrayOf, arrayOfZeros } from '../../common/array-factories'

export { minOperations }

function minOperations(nums: number[], x: number, k: number): number {
    const costs: number[] = calculateWindowCosts(nums, x)
    const length: number = nums.length
    let previous: number[] = arrayOfZeros(length + 1)

    for (let count: number = 1; count <= k; count++) {
        const current: number[] = arrayOf(Infinity, length + 1)

        for (let end: number = x; end <= length; end++) {
            current[end] = Math.min(
                current[end - 1],
                previous[end - x] + costs[end - x]
            )
        }

        previous = current
    }

    return previous[length]
}

function calculateWindowCosts(nums: number[], x: number): number[] {
    const values: number[] = [...new Set<number>(nums)].sort(
        (first: number, second: number): number => first - second
    )
    const ranks: Map<number, number> = new Map<number, number>()

    values.forEach((value: number, index: number): void => {
        ranks.set(value, index + 1)
    })

    const size: number = values.length
    const counts: number[] = arrayOfZeros(size + 1)
    const sums: number[] = arrayOfZeros(size + 1)
    const costs: number[] = []
    let total: number = 0

    for (let index: number = 0; index < nums.length; index++) {
        update(counts, sums, ranks.get(nums[index]) as number, nums[index], 1)
        total += nums[index]

        if (index >= x) {
            const removed: number = nums[index - x]

            update(counts, sums, ranks.get(removed) as number, removed, -1)
            total -= removed
        }

        if (index >= x - 1) {
            const rank: number = findKth(counts, (x + 1) >> 1)
            const median: number = values[rank - 1]
            const leftCount: number = prefix(counts, rank)
            const leftSum: number = prefix(sums, rank)

            costs.push(
                median * leftCount -
                    leftSum +
                    (total - leftSum) -
                    median * (x - leftCount)
            )
        }
    }

    return costs
}

function update(
    counts: number[],
    sums: number[],
    rank: number,
    value: number,
    direction: number
): void {
    for (
        let position: number = rank;
        position < counts.length;
        position += position & -position
    ) {
        counts[position] += direction
        sums[position] += direction * value
    }
}

function prefix(tree: number[], rank: number): number {
    let result: number = 0

    for (
        let position: number = rank;
        position > 0;
        position -= position & -position
    ) {
        result += tree[position]
    }

    return result
}

function findKth(counts: number[], target: number): number {
    let position: number = 0
    let remaining: number = target
    let step: number = 1

    while (step * 2 < counts.length) {
        step *= 2
    }

    for (; step > 0; step >>= 1) {
        if (
            position + step < counts.length &&
            counts[position + step] < remaining
        ) {
            position += step
            remaining -= counts[position]
        }
    }

    return position + 1
}
