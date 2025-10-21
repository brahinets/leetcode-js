import {arrayOfZeros} from "../../common/array-factories"

export {maxFrequency}

function maxFrequency(nums: number[], k: number, numOperations: number): number {
    const maxValue: number = Math.max(...nums)
    const arrayLength: number = maxValue + k + 2
    const frequency: number[] = arrayOfZeros(arrayLength)
    for (const num of nums) {
        frequency[num]++
    }

    const prefixSums: number[] = arrayOfZeros(arrayLength)
    prefixSums[0] = frequency[0]
    for (let i: number = 1; i < arrayLength; i++) {
        prefixSums[i] = prefixSums[i - 1] + frequency[i]
    }

    let maxFrequency: number = 0
    for (let targetValue = 0; targetValue < arrayLength; targetValue++) {
        if (frequency[targetValue] === 0 && numOperations === 0) {
            continue
        }

        const leftBound: number = Math.max(0, targetValue - k)
        const rightBound: number = Math.min(arrayLength - 1, targetValue + k)
        const totalInRange: number = prefixSums[rightBound] - (leftBound > 0 ? prefixSums[leftBound - 1] : 0)
        const otherElements: number = totalInRange - frequency[targetValue]
        const possibleFrequency: number = frequency[targetValue] + Math.min(numOperations, otherElements)

        maxFrequency = Math.max(maxFrequency, possibleFrequency)
    }

    return maxFrequency
}
