import {arrayOf, arrayOfZeros, matrixOf} from "../../common/array-factories"

export {countBalancedPermutations}

const MOD: bigint = 1_000_000_007n

function countBalancedPermutations(numberString: string): number {
    const MAX_DIGITS: number = 80

    const factorials: bigint[] = arrayOf(0n, MAX_DIGITS + 1)
    const inverseFactorials: bigint[] = arrayOf(0n, MAX_DIGITS + 1)
    factorials[0] = 1n

    for (let index: number = 1; index <= MAX_DIGITS; index++) {
        factorials[index] = (factorials[index - 1] * BigInt(index)) % MOD
    }

    inverseFactorials[MAX_DIGITS] = computeModularPower(factorials[MAX_DIGITS], MOD - 2n)
    for (let index: number = MAX_DIGITS; index >= 1; index--) {
        inverseFactorials[index - 1] = (inverseFactorials[index] * BigInt(index)) % MOD
    }

    const totalDigits: number = numberString.length
    const numberOfEvenPositions: number = Math.ceil(totalDigits / 2)
    const numberOfOddPositions: number = totalDigits - numberOfEvenPositions

    const digitFrequencies: number[] = arrayOfZeros(10)
    let totalSumOfDigits: number = 0
    for (const character of numberString) {
        const digitValue: number = character.charCodeAt(0) - 48
        digitFrequencies[digitValue]++
        totalSumOfDigits += digitValue
    }

    if (totalSumOfDigits % 2 !== 0) {
        return 0
    }
    const halfSumTarget: number = totalSumOfDigits / 2

    if (halfSumTarget > numberOfEvenPositions * 9) {
        return 0
    }

    let dpTableCurrent: bigint[][] = matrixOf(0n, numberOfEvenPositions + 1, halfSumTarget + 1)
    let dpTableNext: bigint[][] = matrixOf(0n, numberOfEvenPositions + 1, halfSumTarget + 1)
    dpTableCurrent[0][0] = 1n

    for (let digitValue: number = 0; digitValue <= 9; digitValue++) {
        const frequency: number = digitFrequencies[digitValue]
        if (frequency === 0) {
            continue
        }

        const binomialCoefficients: bigint[] = arrayOf(0n, frequency + 1)
        for (let k: number = 0; k <= frequency; k++) {
            binomialCoefficients[k] =
                (factorials[frequency] * inverseFactorials[k] % MOD) *
                inverseFactorials[frequency - k] % MOD
        }

        for (let count: number = 0; count <= numberOfEvenPositions; count++) {
            dpTableNext[count].fill(0n)
        }

        for (let count: number = 0; count <= numberOfEvenPositions; count++) {
            for (let currentSum: number = 0; currentSum <= halfSumTarget; currentSum++) {
                const currentWays: bigint = dpTableCurrent[count][currentSum]
                if (currentWays === 0n) {
                    continue
                }

                const maxAdditional: number = Math.min(frequency, numberOfEvenPositions - count)

                for (let tryCount: number = 0; tryCount <= maxAdditional; tryCount++) {
                    const newCount: number = count + tryCount
                    const newSum: number = currentSum + tryCount * digitValue

                    if (newSum > halfSumTarget) {
                        break
                    }

                    dpTableNext[newCount][newSum] =
                        (dpTableNext[newCount][newSum] + currentWays * binomialCoefficients[tryCount]) % MOD
                }
            }
        }

        [dpTableCurrent, dpTableNext] = [dpTableNext, dpTableCurrent]
    }

    const waysToPickTarget: bigint = dpTableCurrent[numberOfEvenPositions][halfSumTarget]
    if (waysToPickTarget === 0n) {
        return 0
    }

    let totalArrangements: bigint =
        (waysToPickTarget * factorials[numberOfEvenPositions] % MOD) *
        factorials[numberOfOddPositions] % MOD

    for (let d: number = 0; d <= 9; d++) {
        totalArrangements = (totalArrangements * inverseFactorials[digitFrequencies[d]]) % MOD
    }

    return Number(totalArrangements)
}

function computeModularPower(baseValue: bigint, exponentValue: bigint): bigint {
    let resultValue: bigint = 1n
    let currentBase: bigint = baseValue % MOD
    let currentExponent: bigint = exponentValue

    while (currentExponent > 0n) {
        if (currentExponent & 1n) {
            resultValue = (resultValue * currentBase) % MOD
        }

        currentBase = (currentBase * currentBase) % MOD
        currentExponent >>= 1n
    }
    return resultValue
}
