import { arrayOfZeros } from '../../common/array-factories'

export { sortableIntegers }

function sortableIntegers(nums: number[]): number {
    const length: number = nums.length
    const sortedValues: number[] = [...nums].sort(
        (first: number, second: number): number => first - second
    )
    let total: number = 0

    for (let divisor: number = 1; divisor * divisor <= length; divisor++) {
        if (length % divisor !== 0) {
            continue
        }

        if (isSortableWithBlockSize(nums, sortedValues, divisor)) {
            total += divisor
        }

        const pairedDivisor: number = length / divisor

        if (
            pairedDivisor !== divisor &&
            isSortableWithBlockSize(nums, sortedValues, pairedDivisor)
        ) {
            total += pairedDivisor
        }
    }

    return total
}

function isSortableWithBlockSize(
    nums: number[],
    sortedValues: number[],
    blockSize: number
): boolean {
    for (let start: number = 0; start < nums.length; start += blockSize) {
        const block: number[] = nums.slice(start, start + blockSize)
        const target: number[] = sortedValues.slice(start, start + blockSize)

        if (!canRotateToTarget(block, target)) {
            return false
        }
    }

    return true
}

function canRotateToTarget(block: number[], target: number[]): boolean {
    const doubledBlock: number[] = [...block, ...block]
    const failure: number[] = buildFailure(target)
    let matched: number = 0

    for (let index: number = 0; index < doubledBlock.length; index++) {
        while (matched > 0 && doubledBlock[index] !== target[matched]) {
            matched = failure[matched - 1]
        }

        if (doubledBlock[index] === target[matched]) {
            matched++
        }

        if (matched === target.length) {
            return true
        }
    }

    return false
}

function buildFailure(pattern: number[]): number[] {
    const failure: number[] = arrayOfZeros(pattern.length)
    let matched: number = 0

    for (let index: number = 1; index < pattern.length; index++) {
        while (matched > 0 && pattern[index] !== pattern[matched]) {
            matched = failure[matched - 1]
        }

        if (pattern[index] === pattern[matched]) {
            matched++
        }

        failure[index] = matched
    }

    return failure
}
