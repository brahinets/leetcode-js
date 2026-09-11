import { arrayOfZeros } from "../../common/array-factories"

export { countUniqueThreeDigitEvenNumbers }

function countUniqueThreeDigitEvenNumbers(digits: number[]): number {
    const digitCounts: number[] = arrayOfZeros(10)

    for (const digit of digits) {
        digitCounts[digit] += 1
    }

    let uniqueNumberCount: number = 0

    for (let hundredsDigit: number = 1; hundredsDigit <= 9; hundredsDigit++) {
        for (let tensDigit: number = 0; tensDigit <= 9; tensDigit++) {
            for (let unitsDigit: number = 0; unitsDigit <= 8; unitsDigit += 2) {
                if (hasEnoughDigits(digitCounts, hundredsDigit, tensDigit, unitsDigit)) {
                    uniqueNumberCount += 1
                }
            }
        }
    }

    return uniqueNumberCount
}

function hasEnoughDigits(digitCounts: number[], hundredsDigit: number, tensDigit: number, unitsDigit: number): boolean {
    const requiredCounts: number[] = arrayOfZeros(10)

    requiredCounts[hundredsDigit] += 1
    requiredCounts[tensDigit] += 1
    requiredCounts[unitsDigit] += 1

    for (let digit: number = 0; digit <= 9; digit++) {
        if (requiredCounts[digit] > digitCounts[digit]) {
            return false
        }
    }

    return true
}
