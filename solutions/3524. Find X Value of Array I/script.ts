import { arrayOfZeros } from '../../common/array-factories'

export { resultArray }

function resultArray(nums: number[], k: number): number[] {
    const value: number[] = arrayOfZeros(k)
    let previousCounts: number[] = arrayOfZeros(k)

    for (const number of nums) {
        const currentCounts: number[] = computeCurrentCounts(number, k, previousCounts)

        for (let residue: number = 0; residue < k; residue++) {
            value[residue] += currentCounts[residue]
        }

        previousCounts = currentCounts
    }

    return value
}

function computeCurrentCounts(number: number, k: number, previousCounts: readonly number[]): number[] {
    const currentCounts: number[] = arrayOfZeros(k)
    const residue: number = number % k

    for (let previousResidue: number = 0; previousResidue < k; previousResidue++) {
        if (previousCounts[previousResidue] === 0) {
            continue
        }

        const newResidue: number = (previousResidue * residue) % k
        currentCounts[newResidue] += previousCounts[previousResidue]
    }

    currentCounts[residue] += 1

    return currentCounts
}
