export {divide}

const MAX: number = 2 ** 31 - 1
const MIN: number = -(2 ** 31)

function divide(dividend: number, divisor: number): number {
    if (dividend === MIN && divisor === -1) {
        return MAX
    }

    if (dividend === MIN && divisor === 1) {
        return MIN
    }

    const sign: number = (dividend > 0) === (divisor > 0) ? 1 : -1

    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    let quotient: number = 0
    while (dividend >= divisor) {
        dividend -= divisor
        quotient++
    }

    quotient *= sign

    if (quotient > MAX) {
        return MAX
    }

    if (quotient < MIN) {
        return MIN
    }

    return quotient
}
