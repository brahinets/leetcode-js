export {maxTotalValue}

function maxTotalValue(numbers: number[], k: number): number {
    let maximum: number = numbers[0]
    let minimum: number = numbers[0]

    for (const number of numbers) {
        if (number > maximum) {
            maximum = number
        }

        if (number < minimum) {
            minimum = number
        }
    }

    return k * (maximum - minimum)
}
