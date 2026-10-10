export { minSumSquareDiff }

function minSumSquareDiff(nums1: number[], nums2: number[], k1: number, k2: number): number {
    const differences: number[] = nums1.map((value: number, index: number): number => Math.abs(value - nums2[index]))
    const maximumDifference: number = Math.max(...differences)
    const counts: number[] = new Array<number>(maximumDifference + 1).fill(0)

    for (const difference of differences) {
        counts[difference]++
    }

    let remaining: number = k1 + k2
    let elementsAtLevel: number = 0

    for (let level: number = maximumDifference; level >= 1; level--) {
        elementsAtLevel += counts[level]

        if (elementsAtLevel === 0) {
            continue
        }

        if (remaining < elementsAtLevel) {
            const untouched: number = elementsAtLevel - remaining
            const topSum: number = untouched * level * level + remaining * (level - 1) * (level - 1)

            return topSum + sumOfSquaresBelow(counts, level)
        }

        remaining -= elementsAtLevel
    }

    return 0
}

function sumOfSquaresBelow(counts: number[], level: number): number {
    let sum: number = 0

    for (let value: number = 1; value < level; value++) {
        sum += counts[value] * value * value
    }

    return sum
}
