import {arrayOfZeros} from '../../common/array-factories'

export {zigZagArrays}

const MODULO: number = 1_000_000_007

function zigZagArrays(n: number, l: number, r: number): number {
    const rangeSize: number = r - l + 1
    const upCounts: number[] = computeInitialUpCounts(rangeSize)
    const downCounts: number[] = computeInitialDownCounts(rangeSize)

    for (let step: number = 2; step < n; step++) {
        evolve(upCounts, downCounts, rangeSize)
    }

    return computeTotal(upCounts, downCounts, rangeSize)
}

function computeInitialUpCounts(rangeSize: number): number[] {
    const counts: number[] = arrayOfZeros(rangeSize)

    for (let valueIndex: number = 0; valueIndex < rangeSize; valueIndex++) {
        counts[valueIndex] = valueIndex
    }

    return counts
}

function computeInitialDownCounts(rangeSize: number): number[] {
    const counts: number[] = arrayOfZeros(rangeSize)

    for (let valueIndex: number = 0; valueIndex < rangeSize; valueIndex++) {
        counts[valueIndex] = rangeSize - 1 - valueIndex
    }

    return counts
}

function evolve(upCounts: number[], downCounts: number[], rangeSize: number): void {
    const downPrefix: number[] = buildPrefixSum(downCounts, rangeSize)
    const upSuffix: number[] = buildSuffixSum(upCounts, rangeSize)

    for (let valueIndex: number = 0; valueIndex < rangeSize; valueIndex++) {
        upCounts[valueIndex] = downPrefix[valueIndex]
        downCounts[valueIndex] = upSuffix[valueIndex + 1]
    }
}

function buildPrefixSum(counts: number[], rangeSize: number): number[] {
    const prefix: number[] = arrayOfZeros(rangeSize + 1)

    for (let index: number = 0; index < rangeSize; index++) {
        prefix[index + 1] = (prefix[index] + counts[index]) % MODULO
    }

    return prefix
}

function buildSuffixSum(counts: number[], rangeSize: number): number[] {
    const suffix: number[] = arrayOfZeros(rangeSize + 1)

    for (let index: number = rangeSize - 1; index >= 0; index--) {
        suffix[index] = (suffix[index + 1] + counts[index]) % MODULO
    }

    return suffix
}

function computeTotal(upCounts: number[], downCounts: number[], rangeSize: number): number {
    let total: number = 0

    for (let valueIndex: number = 0; valueIndex < rangeSize; valueIndex++) {
        total = (total + upCounts[valueIndex] + downCounts[valueIndex]) % MODULO
    }

    return total
}
