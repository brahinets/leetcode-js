export {missingInteger}

function missingInteger(numbers: number[]): number {
    const sequentialPrefixSum: number = calculateSequentialPrefixSum(numbers)
    const numbersSet: Set<number> = new Set<number>(numbers)

    let candidate: number = sequentialPrefixSum

    while (numbersSet.has(candidate)) {
        candidate++
    }

    return candidate
}

function calculateSequentialPrefixSum(numbers: number[]): number {
    let prefixSum: number = numbers[0]

    for (let index: number = 1; index < numbers.length; index++) {
        if (numbers[index] !== numbers[index - 1] + 1) {
            break
        }

        prefixSum += numbers[index]
    }

    return prefixSum
}
