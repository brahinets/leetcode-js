export { mirrorDistance }

function mirrorDistance(number: number): number {
    return Math.abs(number - reverseNumber(number))
}

function reverseNumber(value: number): number {
    let reversed: number = 0
    let remaining: number = value

    while (remaining > 0) {
        reversed = reversed * 10 + (remaining % 10)
        remaining = Math.floor(remaining / 10)
    }

    return reversed
}
