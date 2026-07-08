import { arrayOfZeros } from '../../common/array-factories'

export { sumAndMultiply }

const MODULUS: number = 1_000_000_007

interface PrefixArrays {
    readonly concatenatedValue: number[]
    readonly nonZeroDigitCount: number[]
    readonly digitSum: number[]
    readonly powersOfTen: number[]
}

function sumAndMultiply(s: string, queries: number[][]): number[] {
    const prefixArrays: PrefixArrays = buildPrefixArrays(s)

    return queries.map((query: number[]): number =>
        computeAnswerForQuery(query[0], query[1], prefixArrays)
    )
}

function buildPrefixArrays(s: string): PrefixArrays {
    const length: number = s.length
    const concatenatedValue: number[] = arrayOfZeros(length + 1)
    const nonZeroDigitCount: number[] = arrayOfZeros(length + 1)
    const digitSum: number[] = arrayOfZeros(length + 1)
    const powersOfTen: number[] = arrayOfZeros(length + 1)

    powersOfTen[0] = 1

    for (let index: number = 0; index < length; index++) {
        const digit: number = Number(s[index])

        if (digit !== 0) {
            concatenatedValue[index + 1] =
                (concatenatedValue[index] * 10 + digit) % MODULUS
            nonZeroDigitCount[index + 1] = nonZeroDigitCount[index] + 1
        } else {
            concatenatedValue[index + 1] = concatenatedValue[index]
            nonZeroDigitCount[index + 1] = nonZeroDigitCount[index]
        }

        digitSum[index + 1] = digitSum[index] + digit
        powersOfTen[index + 1] = (powersOfTen[index] * 10) % MODULUS
    }

    return { concatenatedValue, nonZeroDigitCount, digitSum, powersOfTen }
}

function computeAnswerForQuery(
    left: number,
    right: number,
    prefixArrays: PrefixArrays
): number {
    const nonZeroDigitCountInRange: number =
        prefixArrays.nonZeroDigitCount[right + 1] -
        prefixArrays.nonZeroDigitCount[left]
    const powerOfTen: number =
        prefixArrays.powersOfTen[nonZeroDigitCountInRange]
    const shiftedPrefixValue: number = multiplyModulo(
        prefixArrays.concatenatedValue[left],
        powerOfTen,
        MODULUS
    )
    const concatenatedValueInRange: number =
        (((prefixArrays.concatenatedValue[right + 1] - shiftedPrefixValue) %
            MODULUS) +
            MODULUS) %
        MODULUS
    const digitSumInRange: number =
        prefixArrays.digitSum[right + 1] - prefixArrays.digitSum[left]

    return multiplyModulo(concatenatedValueInRange, digitSumInRange, MODULUS)
}

function multiplyModulo(
    firstValue: number,
    secondValue: number,
    modulus: number
): number {
    return Number((BigInt(firstValue) * BigInt(secondValue)) % BigInt(modulus))
}
