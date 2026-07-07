import {sum} from '../../common/array-utils'

export {sumAndMultiply}

function sumAndMultiply(n: number): number {
    const nonZeroDigits: string[] = String(n).split('').filter((digit: string): boolean => digit !== '0')

    if (nonZeroDigits.length === 0) {
        return 0
    }

    const concatenatedNumber: number = Number(nonZeroDigits.join(''))
    const sumOfDigits: number = sum(nonZeroDigits.map((digit: string): number => Number(digit)))

    return concatenatedNumber * sumOfDigits
}
