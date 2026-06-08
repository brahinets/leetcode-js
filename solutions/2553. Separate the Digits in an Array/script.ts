export {separateDigits}

function separateDigits(numbers: number[]): number[] {
    const result: number[] = []

    for (const number of numbers) {
        for (const digit of String(number)) {
            result.push(Number(digit))
        }
    }

    return result
}
