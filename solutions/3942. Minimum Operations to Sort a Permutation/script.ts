export { minOperations }

function minOperations(numbers: number[]): number {
    const length: number = numbers.length
    const zeroPosition: number = findValuePosition(numbers, 0)
    const maximumPosition: number = findValuePosition(numbers, length - 1)

    let minimumOperations: number = -1

    if (isAscendingRotation(numbers, zeroPosition)) {
        minimumOperations = costToRotateToSorted(zeroPosition, length)
    }

    if (isDescendingRotation(numbers, maximumPosition)) {
        const costWithReversal: number = 1 + Math.min(maximumPosition, length - maximumPosition)
        if (minimumOperations === -1 || costWithReversal < minimumOperations) {
            minimumOperations = costWithReversal
        }
    }

    return minimumOperations
}

function costToRotateToSorted(shift: number, length: number): number {
    if (shift === 0) {
        return 0
    }

    return Math.min(shift, 2 + length - shift)
}

function findValuePosition(numbers: number[], value: number): number {
    for (let index: number = 0; index < numbers.length; index++) {
        if (numbers[index] === value) {
            return index
        }
    }

    return -1
}

function isAscendingRotation(numbers: number[], shift: number): boolean {
    const length: number = numbers.length

    for (let index: number = 0; index < length; index++) {
        if (numbers[(shift + index) % length] !== index) {
            return false
        }
    }

    return true
}

function isDescendingRotation(numbers: number[], shift: number): boolean {
    const length: number = numbers.length

    for (let index: number = 0; index < length; index++) {
        if (numbers[(shift + index) % length] !== length - 1 - index) {
            return false
        }
    }

    return true
}
