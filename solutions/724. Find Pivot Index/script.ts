export {pivotIndex}

function pivotIndex(nums: number[]): number {
    const accumulativeSums: Map<number, number> = sums(nums)

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

function sums(nums: number[]): Map<number, number> {
    const sums: Map<number, number> = new Map<number, number>()

    for (let index: number = 0; index < nums.length; index++) {
        const sumUntilIndex: number = sums.get(index - 1) ?? 0
        sums.set(index, sumUntilIndex + nums[index])
    }

    return sums
}
