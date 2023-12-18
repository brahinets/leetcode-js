export {maxProductDifference}

function maxProductDifference(nums: number[]): number {
    const sorted: number[] = nums.toSorted((a: number, b: number): number => a - b)

    return sorted[sorted.length - 1] * sorted[sorted.length - 2] - sorted[0] * sorted[1]
}
