export {minOperations}

function minOperations(numbers: number[], x: number): number {
    const totalSum: number = numbers.reduce((sum: number, number: number): number => sum + number, 0)
    const targetSum: number = totalSum - x

    if (targetSum < 0) {
        return -1
    }

    if (targetSum === 0) {
        return numbers.length
    }

    let maximumWindowLength: number = -1
    let windowSum: number = 0
    let windowStart: number = 0

    for (let windowEnd: number = 0; windowEnd < numbers.length; windowEnd++) {
        windowSum += numbers[windowEnd]

        while (windowSum > targetSum && windowStart <= windowEnd) {
            windowSum -= numbers[windowStart]
            windowStart++
        }

        if (windowSum === targetSum) {
            maximumWindowLength = Math.max(maximumWindowLength, windowEnd - windowStart + 1)
        }
    }

    return maximumWindowLength === -1 ? -1 : numbers.length - maximumWindowLength
}
