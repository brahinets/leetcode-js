export {minElement}

function digitSum(value: number): number {
    let sum: number = 0

    while (value > 0) {
        sum += value % 10
        value = Math.floor(value / 10)
    }

    return sum
}

function minElement(numbers: readonly number[]): number {
    let minimum: number = Infinity

    for (let index: number = 0; index < numbers.length; index++) {
        const sum: number = digitSum(numbers[index])

        if (sum < minimum) {
            minimum = sum
        }
    }

    return minimum
}
