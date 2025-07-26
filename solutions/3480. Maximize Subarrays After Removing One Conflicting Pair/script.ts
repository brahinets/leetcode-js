import {arrayOf, arrayOfZeros} from "../../common/array-factories"

export {maxSubarrays}

type MinConflicts = {
    minConflict1: number[]
    minConflict2: number[]
}

type DeletionsResult = {
    totalSubarrays: number
    deletionCounts: number[]
}

function prepareMinConflicts(n: number, conflictingPairs: number[][]): MinConflicts {
    const minConflict1: number[] = arrayOf(Number.MAX_SAFE_INTEGER, n + 1)
    const minConflict2: number[] = arrayOf(Number.MAX_SAFE_INTEGER, n + 1)

    for (const pair of conflictingPairs) {
        const a: number = Math.min(pair[0], pair[1])
        const b: number = Math.max(pair[0], pair[1])

        if (minConflict1[a] > b) {
            minConflict2[a] = minConflict1[a]
            minConflict1[a] = b
        } else if (minConflict2[a] > b) {
            minConflict2[a] = b
        }
    }

    return {minConflict1, minConflict2}
}

function calculateDeletions(
    n: number,
    minConflict1: number[],
    minConflict2: number[]
): DeletionsResult {
    let totalSubarrays: number = 0
    let currentMinIndex: number = n
    let minConflict2Value: number = Number.MAX_SAFE_INTEGER
    const deletionCounts: number[] = arrayOfZeros(n + 1)

    for (let i: number = n; i >= 1; i--) {
        if (minConflict1[currentMinIndex] > minConflict1[i]) {
            minConflict2Value = Math.min(minConflict2Value, minConflict1[currentMinIndex])
            currentMinIndex = i
        } else {
            minConflict2Value = Math.min(minConflict2Value, minConflict1[i])
        }

        const rightBound: number = Math.min(minConflict1[currentMinIndex], n + 1)
        totalSubarrays += rightBound - i

        const deletionBound: number = Math.min(Math.min(minConflict2Value, minConflict2[currentMinIndex]), n + 1)
        deletionCounts[currentMinIndex] += deletionBound - rightBound
    }

    return {totalSubarrays, deletionCounts}
}

function maxSubarrays(n: number, conflictingPairs: number[][]): number {
    const minConflicts: MinConflicts = prepareMinConflicts(n, conflictingPairs)
    const deletions: DeletionsResult = calculateDeletions(n, minConflicts.minConflict1, minConflicts.minConflict2)

    const maxDeletions: number = Math.max(...deletions.deletionCounts)

    return deletions.totalSubarrays + maxDeletions
}
