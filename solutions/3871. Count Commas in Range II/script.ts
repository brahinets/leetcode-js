export { countCommas }

const DIGITS_PER_COMMA_GROUP: number = 3

function countCommas(n: number): number {
    const digitCount: number = String(n).length
    let totalCommaCount: number = 0

    for (let length: number = 1; length <= digitCount; length++) {
        const rangeStart: number = length === 1 ? 1 : 10 ** (length - 1)
        const rangeEnd: number = 10 ** length - 1
        const intersectionStart: number = Math.max(rangeStart, 1)
        const intersectionEnd: number = Math.min(rangeEnd, n)

        if (intersectionStart > intersectionEnd) {
            continue
        }

        const numberCount: number = intersectionEnd - intersectionStart + 1
        const commasPerNumber: number = Math.floor((length - 1) / DIGITS_PER_COMMA_GROUP)

        totalCommaCount += numberCount * commasPerNumber
    }

    return totalCommaCount
}
