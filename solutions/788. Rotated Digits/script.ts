export { rotatedDigits }

function rotatedDigits(n: number): number {
    const INVALID_DIGITS: ReadonlySet<number> = new Set<number>([3, 4, 7])
    const CHANGING_DIGITS: ReadonlySet<number> = new Set<number>([2, 5, 6, 9])

    let count: number = 0

    for (let number: number = 1; number <= n; number++) {
        if (isGood(number, INVALID_DIGITS, CHANGING_DIGITS)) {
            count++
        }
    }

    return count
}

function isGood(number: number, invalidDigits: ReadonlySet<number>, changingDigits: ReadonlySet<number>): boolean {
    let hasChangingDigit: boolean = false
    let remaining: number = number

    while (remaining > 0) {
        const digit: number = remaining % 10

        if (invalidDigits.has(digit)) {
            return false
        }

        if (changingDigits.has(digit)) {
            hasChangingDigit = true
        }

        remaining = Math.floor(remaining / 10)
    }

    return hasChangingDigit
}
