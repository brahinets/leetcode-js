export { largestInteger }

function largestInteger(nums: number[], k: number): number {
    if (k === nums.length) {
        return Math.max(...nums)
    }

    const frequencies: Map<number, number> = countFrequencies(nums)
    if (k === 1) {
        return largestUnique(nums, frequencies)
    }

    return Math.max(
        uniqueOrMissing(nums[0], frequencies),
        uniqueOrMissing(nums[nums.length - 1], frequencies)
    )
}

function countFrequencies(nums: number[]): Map<number, number> {
    const frequencies: Map<number, number> = new Map<number, number>()
    for (const value of nums) {
        frequencies.set(value, (frequencies.get(value) ?? 0) + 1)
    }

    return frequencies
}

function largestUnique(
    nums: number[],
    frequencies: Map<number, number>
): number {
    let largest: number = -1
    for (const value of nums) {
        largest = Math.max(largest, uniqueOrMissing(value, frequencies))
    }

    return largest
}

function uniqueOrMissing(
    value: number,
    frequencies: Map<number, number>
): number {
    return frequencies.get(value) === 1 ? value : -1
}
