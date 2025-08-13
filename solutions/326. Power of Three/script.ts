export {isPowerOfThree}

export const MAX_ALLOWED_DEVIATION: number = 10 ** -10

function isPowerOfThree(n: number): boolean {
    if (n <= 0) {
        return false
    }

    const log3: number = Math.log(n) / Math.log(3)
    const rounded: number = Math.round(log3)

    return Math.abs(Math.pow(3, rounded) - n) < MAX_ALLOWED_DEVIATION
}
