import {arrayOf, matrixOf} from "../../common/array-factories"

export {checkRecord}

const MOD: number = 10 ** 9 + 7

function checkRecord(n: number): number {
    const memo: number[][][] = arrayOf(matrixOf(-1, 2, 3), n + 1)

    return eligible(n, 0, 0, memo)
}

function eligible(n: number, totalAbsence: number, totalConsecutiveLate: number, memo: number[][][]): number {
    if (totalAbsence >= 2 || totalConsecutiveLate >= 3) {
        return 0
    }

    if (n === 0) {
        return 1
    }

    const memoized: number = memo[n][totalAbsence][totalConsecutiveLate];
    if (memoized !== -1) {
        return memoized
    }

    let count: number = 0
    count = (count + eligible(n - 1, totalAbsence, 0, memo)) % MOD
    count = (count + eligible(n - 1, totalAbsence + 1, 0, memo)) % MOD
    count = (count + eligible(n - 1, totalAbsence, totalConsecutiveLate + 1, memo)) % MOD

    memo[n][totalAbsence][totalConsecutiveLate] = count

    return count
}
