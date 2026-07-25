export { maxProduct }

function maxProduct(n: number): number {
    let largestDigit: number = 0
    let secondLargestDigit: number = 0
    let remaining: number = n
    while (remaining > 0) {
        const digit: number = remaining % 10
        if (digit >= largestDigit) {
            secondLargestDigit = largestDigit
            largestDigit = digit
        } else if (digit > secondLargestDigit) {
            secondLargestDigit = digit
        }

        remaining = Math.floor(remaining / 10)
    }

    return largestDigit * secondLargestDigit
}
