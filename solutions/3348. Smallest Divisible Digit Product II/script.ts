export {smallestNumber}

const PRIMES: ReadonlyArray<number> = [2, 3, 5, 7]

const PRIME_FACTORS_BY_DIGIT: ReadonlyArray<ReadonlyMap<number, number>> = [
    new Map<number, number>(),
    new Map<number, number>(),
    new Map<number, number>([[2, 1]]),
    new Map<number, number>([[3, 1]]),
    new Map<number, number>([[2, 2]]),
    new Map<number, number>([[5, 1]]),
    new Map<number, number>([[2, 1], [3, 1]]),
    new Map<number, number>([[7, 1]]),
    new Map<number, number>([[2, 3]]),
    new Map<number, number>([[3, 2]]),
]

function smallestNumber(numberString: string, divisor: number): string {
    const requiredPrimeCounts: Map<number, number> | null = getRequiredPrimeCounts(divisor)
    if (requiredPrimeCounts === null) {
        return '-1'
    }

    const minimalDigitCounts: Map<number, number> = getMinimalDigitCounts(requiredPrimeCounts)
    if (sumOfCounts(minimalDigitCounts) > numberString.length) {
        return buildDigitString(minimalDigitCounts)
    }

    let remainingPrimeCounts: Map<number, number> = getPrimeCountsFromDigits(numberString)
    const firstZeroIndex: number = numberString.indexOf('0')
    if (firstZeroIndex === -1 && isSubset(requiredPrimeCounts, remainingPrimeCounts)) {
        return numberString
    }

    const boundaryIndex: number = firstZeroIndex === -1 ? numberString.length : firstZeroIndex

    for (let index: number = numberString.length - 1; index >= 0; index--) {
        const digit: number = Number(numberString[index])
        remainingPrimeCounts = subtractCounts(remainingPrimeCounts, PRIME_FACTORS_BY_DIGIT[digit])
        if (index > boundaryIndex) {
            continue
        }

        const spaceAfterDigit: number = numberString.length - 1 - index
        const missingBeforeDigit: Map<number, number> = subtractCounts(requiredPrimeCounts, remainingPrimeCounts)
        for (let biggerDigit: number = digit + 1; biggerDigit < 10; biggerDigit++) {
            const missingPrimeCounts: Map<number, number> = subtractCounts(
                missingBeforeDigit,
                PRIME_FACTORS_BY_DIGIT[biggerDigit],
            )
            const factorsAfterReplacement: Map<number, number> = getMinimalDigitCounts(missingPrimeCounts)
            const digitsNeeded: number = sumOfCounts(factorsAfterReplacement)
            if (digitsNeeded <= spaceAfterDigit) {
                const fillOnesCount: number = spaceAfterDigit - digitsNeeded
                return numberString.slice(0, index)
                    + String(biggerDigit)
                    + '1'.repeat(fillOnesCount)
                    + buildDigitString(factorsAfterReplacement)
            }
        }
    }

    const factorsForExtendedNumber: Map<number, number> = getMinimalDigitCounts(requiredPrimeCounts)
    const leadingOnesCount: number = numberString.length + 1 - sumOfCounts(factorsForExtendedNumber)
    return '1'.repeat(leadingOnesCount) + buildDigitString(factorsForExtendedNumber)
}

function getRequiredPrimeCounts(divisor: number): Map<number, number> | null {
    let remainingDivisor: number = divisor
    const primeCounts: Map<number, number> = new Map<number, number>()

    for (const prime of PRIMES) {
        let exponent: number = 0
        while (remainingDivisor % prime === 0) {
            remainingDivisor /= prime
            exponent++
        }

        primeCounts.set(prime, exponent)
    }

    return remainingDivisor === 1 ? primeCounts : null
}

function getMinimalDigitCounts(primeCounts: ReadonlyMap<number, number>): Map<number, number> {
    const countOfPrime2: number = primeCounts.get(2) ?? 0
    const countOfPrime3: number = primeCounts.get(3) ?? 0
    const countOfPrime5: number = primeCounts.get(5) ?? 0
    const countOfPrime7: number = primeCounts.get(7) ?? 0

    const countOfDigit8: number = Math.floor(countOfPrime2 / 3)
    const remainingCountOfPrime2: number = countOfPrime2 % 3
    const countOfDigit9: number = Math.floor(countOfPrime3 / 2)
    let countOfDigit3: number = countOfPrime3 % 2
    let countOfDigit4: number = Math.floor(remainingCountOfPrime2 / 2)
    let countOfDigit2: number = remainingCountOfPrime2 % 2
    let countOfDigit6: number = 0

    if (countOfDigit2 === 1 && countOfDigit3 === 1) {
        countOfDigit2 = 0
        countOfDigit3 = 0
        countOfDigit6 = 1
    }

    if (countOfDigit3 === 1 && countOfDigit4 === 1) {
        countOfDigit2 = 1
        countOfDigit6 = 1
        countOfDigit3 = 0
        countOfDigit4 = 0
    }

    const digitCounts: Map<number, number> = new Map<number, number>()
    digitCounts.set(2, countOfDigit2)
    digitCounts.set(3, countOfDigit3)
    digitCounts.set(4, countOfDigit4)
    digitCounts.set(5, countOfPrime5)
    digitCounts.set(6, countOfDigit6)
    digitCounts.set(7, countOfPrime7)
    digitCounts.set(8, countOfDigit8)
    digitCounts.set(9, countOfDigit9)

    return digitCounts
}

function sumOfCounts(counts: ReadonlyMap<number, number>): number {
    let sum: number = 0
    for (const value of counts.values()) {
        sum += value
    }

    return sum
}

function buildDigitString(digitCounts: ReadonlyMap<number, number>): string {
    let result: string = ''
    for (let digit: number = 2; digit < 10; digit++) {
        result += String(digit).repeat(digitCounts.get(digit) ?? 0)
    }

    return result
}

function getPrimeCountsFromDigits(numberString: string): Map<number, number> {
    const primeCounts: Map<number, number> = new Map<number, number>()
    for (const character of numberString) {
        const digit: number = Number(character)
        for (const [prime, exponent] of PRIME_FACTORS_BY_DIGIT[digit]) {
            primeCounts.set(prime, (primeCounts.get(prime) ?? 0) + exponent)
        }
    }

    return primeCounts
}

function isSubset(required: ReadonlyMap<number, number>, available: ReadonlyMap<number, number>): boolean {
    return PRIMES.every((prime: number): boolean => (available.get(prime) ?? 0) >= (required.get(prime) ?? 0))
}

function subtractCounts(minuend: ReadonlyMap<number, number>, subtrahend: ReadonlyMap<number, number>): Map<number, number> {
    const result: Map<number, number> = new Map<number, number>()
    for (const prime of PRIMES) {
        const difference: number = (minuend.get(prime) ?? 0) - (subtrahend.get(prime) ?? 0)
        result.set(prime, Math.max(0, difference))
    }

    return result
}
