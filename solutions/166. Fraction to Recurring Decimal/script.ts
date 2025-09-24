export {fractionToDecimal}

function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator === 0) {
        return "0"
    }

    let result = ""

    if ((numerator < 0) !== (denominator < 0)) {
        result += "-"
    }
    const num: number = Math.abs(numerator)
    const den: number = Math.abs(denominator)

    result += Math.floor(num / den)
    let remainder: number = num % den
    if (remainder === 0) {
        return result
    }

    result += "."
    const map = new Map<number, number>()
    while (remainder !== 0) {
        if (map.has(remainder)) {
            const idx: number = map.get(remainder)!
            result = result.slice(0, idx) + "(" + result.slice(idx) + ")"

            break
        }

        map.set(remainder, result.length)
        remainder *= 10
        result += Math.floor(remainder / den)
        remainder %= den
    }

    return result
}
