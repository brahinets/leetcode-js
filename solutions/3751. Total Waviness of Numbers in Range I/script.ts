export { totalWaviness }

function totalWaviness(num1: number, num2: number): number {
    let total: number = 0

    for (let number: number = num1; number <= num2; number++) {
        total += calculateWaviness(number)
    }

    return total
}

function calculateWaviness(number: number): number {
    const digits: number[] = []
    let remaining: number = number

    while (remaining > 0) {
        digits.unshift(remaining % 10)
        remaining = Math.floor(remaining / 10)
    }

    if (digits.length < 3) {
        return 0
    }

    let waviness: number = 0

    for (let index: number = 1; index < digits.length - 1; index++) {
        const previous: number = digits[index - 1]
        const current: number = digits[index]
        const next: number = digits[index + 1]

        if (current > previous && current > next) {
            waviness++
        } else if (current < previous && current < next) {
            waviness++
        }
    }

    return waviness
}
