export {minMaxDifference}

function minMaxDifference(num: number): number {
    const digits: string[] = num.toString().split('')
    const maxNum: number = getMaxNum(digits)
    const minNum: number = getMinNum(digits)
    return maxNum - minNum
}

function remapDigits(
    digits: string[],
    from: string,
    to: string
): string[] {
    return digits.map(function (d: string): string {
        if (d === from) {
            return to
        } else {
            return d
        }
    })
}

function getMaxNum(digits: string[]): number {
    const firstNonNine: string | undefined = digits.find(function (d: string): boolean {
        return d !== '9'
    })
    if (firstNonNine !== undefined) {
        return parseInt(remapDigits(digits, firstNonNine, '9').join(''), 10)
    } else {
        return parseInt(digits.join(''), 10)
    }
}

function getMinNum(digits: string[]): number {
    const firstDigit: string = digits[0]
    return parseInt(remapDigits(digits, firstDigit, '0').join(''), 10)
}
