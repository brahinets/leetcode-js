export { minimumDeletions }

function minimumDeletions(numbers: number[]): number {
    const arrayLength: number = numbers.length

    let minimumIndex: number = 0
    let maximumIndex: number = 0

    for (let index: number = 1; index < arrayLength; index++) {
        if (numbers[index] < numbers[minimumIndex]) {
            minimumIndex = index
        }

        if (numbers[index] > numbers[maximumIndex]) {
            maximumIndex = index
        }
    }

    const firstIndex: number = Math.min(minimumIndex, maximumIndex)
    const secondIndex: number = Math.max(minimumIndex, maximumIndex)

    const deletionsFromFront: number = secondIndex + 1
    const deletionsFromBack: number = arrayLength - firstIndex
    const deletionsFromBothSides: number = firstIndex + 1 + (arrayLength - secondIndex)

    return Math.min(deletionsFromFront, deletionsFromBack, deletionsFromBothSides)
}
