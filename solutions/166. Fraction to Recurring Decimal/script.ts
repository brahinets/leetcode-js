export {fractionToDecimal}

function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator === 0) {
        return "0"
    }

    let result: string = getSign(numerator, denominator)
    const absNumerator: number = Math.abs(numerator)
    const absDenominator: number = Math.abs(denominator)

    result += getIntegerPart(absNumerator, absDenominator)
    let remainder: number = absNumerator % absDenominator
    if (remainder === 0) {
        return result
    }

    result += "."
    result += getDecimalPart(remainder, absDenominator, result.length)
    return result
}

function getSign(numerator: number, denominator: number): string {
    return (numerator < 0) !== (denominator < 0) ? "-" : ""
}

function getIntegerPart(numerator: number, denominator: number): string {
    return Math.floor(numerator / denominator).toString()
}

function getDecimalPart(remainder: number, denominator: number, offset: number): string {
    const remainderMap = new Map<number, number>()
    let decimal: string = ""

    while (remainder !== 0) {
        if (remainderMap.has(remainder)) {
            const repeatIndex: number = remainderMap.get(remainder)! - offset

            return decimal.slice(0, repeatIndex) + "(" + decimal.slice(repeatIndex) + ")"
        }

        remainderMap.set(remainder, decimal.length + offset)
        remainder *= 10
        decimal += Math.floor(remainder / denominator).toString()
        remainder %= denominator
    }

    return decimal
}
