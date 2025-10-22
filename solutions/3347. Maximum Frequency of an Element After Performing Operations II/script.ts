export {maxFrequency}

function maxFrequency(
    numbers: number[],
    maxIncrementPerElement: number,
    maxTotalOperations: number
): number {
    numbers.sort((a: number, b: number): number => a - b)

    let maximumFrequency: number = 0
    const valueFrequencyMap: Map<number, number> = new Map<number, number>()
    const candidateValues: Set<number> = new Set<number>()

    for (let index: number = 0, start: number = 0; index <= numbers.length; index++) {
        if (index === numbers.length || numbers[index] !== numbers[start]) {
            const value: number = numbers[start]
            const frequency: number = index - start

            valueFrequencyMap.set(value, frequency)

            maximumFrequency = Math.max(maximumFrequency, frequency)

            const candidates: Set<number> = getCandidates(value, maxIncrementPerElement, numbers[0], numbers.at(-1)!);
            for (const candidate of candidates) {
                candidateValues.add(candidate);
            }

            start = index
        }
    }

    for (const candidate of candidateValues) {
        const left: number = lowerBound(numbers, candidate - maxIncrementPerElement)
        const right: number = upperBound(numbers, candidate + maxIncrementPerElement)

        let possibleFrequency: number
        if (valueFrequencyMap.has(candidate)) {
            possibleFrequency = Math.min(right - left + 1, valueFrequencyMap.get(candidate)! + maxTotalOperations)
        } else {
            possibleFrequency = Math.min(right - left + 1, maxTotalOperations)
        }

        maximumFrequency = Math.max(maximumFrequency, possibleFrequency)
    }

    return maximumFrequency
}

function getCandidates(
    value: number,
    increment: number,
    minValue: number,
    maxValue: number
): Set<number> {
    let candidates: Set<number> = new Set<number>()

    candidates.add(value)

    if (value - increment >= minValue) {
        candidates.add(value - increment)
    }

    if (value + increment <= maxValue) {
        candidates.add(value + increment)
    }

    return candidates
}

function lowerBound(array: number[], target: number): number {
    let left: number = 0, right: number = array.length - 1

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)

        if (array[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left
}

function upperBound(array: number[], target: number): number {
    let left: number = 0
    let right: number = array.length - 1

    while (left < right) {
        const mid: number = Math.floor((left + right + 1) / 2)

        if (array[mid] > target) {
            right = mid - 1
        } else {
            left = mid
        }
    }

    return left
}
