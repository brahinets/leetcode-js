import { matrixOfZeros } from '../../common/array-factories'

export { numberOfStableArrays }

const MOD: number = 1_000_000_007

function numberOfStableArrays(zeros: number, ones: number, limit: number): number {
    const waysEndingWithZero: number[][] = matrixOfZeros(zeros + 1, ones + 1)
    const waysEndingWithOne: number[][] = matrixOfZeros(zeros + 1, ones + 1)
    const prefixSumAlongZeros: number[][] = matrixOfZeros(zeros + 1, ones + 1)
    const prefixSumAlongOnes: number[][] = matrixOfZeros(zeros + 1, ones + 1)

    for (let zeroCount: number = 0; zeroCount <= zeros; zeroCount++) {
        for (let oneCount: number = 0; oneCount <= ones; oneCount++) {
            if (zeroCount === 0 && oneCount === 0) { continue }

            const windowStartForZero: number = zeroCount > 0 ? prefixSumAlongZeros[zeroCount - 1][oneCount] : 0
            const windowEndForZero: number = zeroCount > limit ? prefixSumAlongZeros[zeroCount - limit - 1][oneCount] : 0
            waysEndingWithZero[zeroCount][oneCount] = (windowStartForZero - windowEndForZero + MOD) % MOD

            if (zeroCount <= limit && oneCount === 0) {
                waysEndingWithZero[zeroCount][oneCount] = (waysEndingWithZero[zeroCount][oneCount] + 1) % MOD
            }

            prefixSumAlongOnes[zeroCount][oneCount] = ((oneCount > 0 ? prefixSumAlongOnes[zeroCount][oneCount - 1] : 0) + waysEndingWithZero[zeroCount][oneCount]) % MOD

            const windowStartForOne: number = oneCount > 0 ? prefixSumAlongOnes[zeroCount][oneCount - 1] : 0
            const windowEndForOne: number = oneCount > limit ? prefixSumAlongOnes[zeroCount][oneCount - limit - 1] : 0
            waysEndingWithOne[zeroCount][oneCount] = (windowStartForOne - windowEndForOne + MOD) % MOD

            if (oneCount <= limit && zeroCount === 0) {
                waysEndingWithOne[zeroCount][oneCount] = (waysEndingWithOne[zeroCount][oneCount] + 1) % MOD
            }

            prefixSumAlongZeros[zeroCount][oneCount] = ((zeroCount > 0 ? prefixSumAlongZeros[zeroCount - 1][oneCount] : 0) + waysEndingWithOne[zeroCount][oneCount]) % MOD
        }
    }

    return (waysEndingWithZero[zeros][ones] + waysEndingWithOne[zeros][ones]) % MOD
}
