export {pivotIndex}

function pivotIndex(nums: number[]): number {
    const accumulativeSums: Map<number, number> = accumulateSums(nums)

    const total: number | undefined = accumulativeSums.get(nums.length - 1)
    if (total === undefined) {
        return -1
    }

    for (let i: number = 0; i < nums.length; i++) {
        const left: number = accumulativeSums.get(i - 1) ?? 0
        const right: number = total - left - nums[i]

        if (left === right) {
            return i
        }
    }

    return -1
}

function accumulateSums(nums: number[]): Map<number, number> {
    const sums: Map<number, number> = new Map<number, number>()

    for (let i: number = 0; i < nums.length; i++) {
        const sumUntilIndex: number = sums.get(i - 1) ?? 0
        sums.set(i, sumUntilIndex + nums[i])
    }

    return sums
}
