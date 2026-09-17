import { arrayOf } from "../../common/array-factories"

export { minSumOfLengths }

function minSumOfLengths(array: number[], target: number): number {
    const lastIndexBySum: Map<number, number> = new Map<number, number>([[0, -1]])
    const minimumLengthUpToIndex: number[] = arrayOf(Infinity, array.length)
    let runningSum: number = 0
    let result: number = Infinity

    for (let index: number = 0; index < array.length; index++) {
        runningSum += array[index]

        const startIndex: number | undefined = lastIndexBySum.get(runningSum - target)

        if (startIndex !== undefined) {
            const currentLength: number = index - startIndex
            const previousBestLength: number = startIndex >= 0 ? minimumLengthUpToIndex[startIndex] : Infinity

            if (previousBestLength !== Infinity) {
                result = Math.min(result, previousBestLength + currentLength)
            }

            minimumLengthUpToIndex[index] = Math.min(currentLength, index > 0 ? minimumLengthUpToIndex[index - 1] : Infinity)
        } else {
            minimumLengthUpToIndex[index] = index > 0 ? minimumLengthUpToIndex[index - 1] : Infinity
        }

        lastIndexBySum.set(runningSum, index)
    }

    return result === Infinity ? -1 : result
}
