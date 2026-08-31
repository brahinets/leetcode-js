export { largestInteger }

function largestInteger(numbers: number[], windowSize: number): number {
    const arrayLength: number = numbers.length
    const windowCount: number = arrayLength - windowSize + 1

    const valueToWindowCount: Map<number, number> = new Map<number, number>()

    for (let windowStart: number = 0; windowStart < windowCount; windowStart++) {
        const valuesInWindow: Set<number> = new Set<number>(
            numbers.slice(windowStart, windowStart + windowSize)
        )

        for (const value of valuesInWindow) {
            valueToWindowCount.set(value, (valueToWindowCount.get(value) ?? 0) + 1)
        }
    }

    let largestAlmostMissingValue: number = -1

    for (const [value, count] of valueToWindowCount) {
        if (count === 1 && value > largestAlmostMissingValue) {
            largestAlmostMissingValue = value
        }
    }

    return largestAlmostMissingValue
}
