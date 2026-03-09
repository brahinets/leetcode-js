import { matrixOfZeros } from '../../common/array-factories'

export { numberOfStableArrays }

function numberOfStableArrays(zeros: number, ones: number, limit: number): number {
    const MODULO: number = 1_000_000_007

    const waysEndingWithZero: number[][] = matrixOfZeros(zeros + 1, ones + 1)
    const waysEndingWithOne: number[][] = matrixOfZeros(zeros + 1, ones + 1)

    for (let zeroCount: number = 0; zeroCount <= zeros; zeroCount++) {
        for (let oneCount: number = 0; oneCount <= ones; oneCount++) {
            if (zeroCount === 0 && oneCount === 0) { continue }

            for (let run: number = 1; run <= Math.min(zeroCount, limit); run++) {
                waysEndingWithZero[zeroCount][oneCount] = (waysEndingWithZero[zeroCount][oneCount] + waysEndingWithOne[zeroCount - run][oneCount]) % MODULO
            }
            
            if (zeroCount <= limit && oneCount === 0) {
                waysEndingWithZero[zeroCount][oneCount] = (waysEndingWithZero[zeroCount][oneCount] + 1) % MODULO
            }

            for (let run: number = 1; run <= Math.min(oneCount, limit); run++) {
                waysEndingWithOne[zeroCount][oneCount] = (waysEndingWithOne[zeroCount][oneCount] + waysEndingWithZero[zeroCount][oneCount - run]) % MODULO
            }
            
            if (oneCount <= limit && zeroCount === 0) {
                waysEndingWithOne[zeroCount][oneCount] = (waysEndingWithOne[zeroCount][oneCount] + 1) % MODULO
            }
        }
    }

    return (waysEndingWithZero[zeros][ones] + waysEndingWithOne[zeros][ones]) % MODULO
}
