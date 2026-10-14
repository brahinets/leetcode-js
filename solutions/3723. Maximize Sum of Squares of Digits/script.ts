export { maxSumOfSquares }

const MAXIMUM_DIGIT: number = 9

function maxSumOfSquares(num: number, sum: number): string {
    if (sum > num * MAXIMUM_DIGIT) {
        return ''
    }

    const nineCount: number = Math.floor(sum / MAXIMUM_DIGIT)
    const remainder: number = sum % MAXIMUM_DIGIT
    const hasRemainder: boolean = remainder > 0
    const zeroCount: number = num - nineCount - (hasRemainder ? 1 : 0)

    return '9'.repeat(nineCount) + (hasRemainder ? String(remainder) : '') + '0'.repeat(zeroCount)
}
