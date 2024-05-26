import {arrayOf, matrixOf} from "../../common/array-factories"

export {checkRecord}

const MOD: number = 10 ** 9 + 7

function checkRecord(n: number): number {
    const memo: number[][][] = arrayOf(matrixOf(0, 2, 3), n + 1)
    memo[0][0][0] = 1
    buildPossibleStates(n, memo)

    let result: number = 0
    for (let totalAbsence: number = 0; totalAbsence < 2; totalAbsence++) {
        for (let totalLate: number = 0; totalLate < 3; totalLate++) {
            result = (result + memo[n][totalAbsence][totalLate]) % MOD
        }
    }

    return result
}

function buildPossibleStates(n: number, memo: number[][][]): void {
    for (let i: number = 1; i <= n; i++) {
        for (let totalAbsence: number = 0; totalAbsence < 2; totalAbsence++) {
            for (let totalLate: number = 0; totalLate < 3; totalLate++) {
                memo[i][totalAbsence][0] = (
                    memo[i][totalAbsence][0] + memo[i - 1][totalAbsence][totalLate]
                ) % MOD

                if (totalLate < 2) {
                    memo[i][totalAbsence][totalLate + 1] = (
                        memo[i][totalAbsence][totalLate + 1] + memo[i - 1][totalAbsence][totalLate]
                    ) % MOD
                }

                if (totalAbsence < 1) {
                    memo[i][totalAbsence + 1][0] = (
                        memo[i][totalAbsence + 1][0] + memo[i - 1][totalAbsence][totalLate]
                    ) % MOD
                }
            }
        }
    }
}
