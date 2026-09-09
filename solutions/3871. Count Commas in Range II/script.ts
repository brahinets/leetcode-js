export { countCommas }

const DIGITS_PER_COMMA_GROUP: number = 3

function countCommas(n: number): number {
    const digitCount: number = String(n).length
    let totalCommaCount: number = 0

    for (let length: number = 1; length <= digitCount; length++) {
        const rangeStart: number = 10 ** (length - 1)
        const rangeEnd: number = Math.min(10 ** length - 1, n)

        const numberCount: number = rangeEnd - rangeStart + 1
        const commasPerNumber: number = Math.floor((length - 1) / DIGITS_PER_COMMA_GROUP)

        totalCommaCount += numberCount * commasPerNumber
    }

    return totalCommaCount
}
