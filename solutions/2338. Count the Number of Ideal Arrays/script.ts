import {matrixOfZeros} from "../../common/array-factories"

export {idealArrays}

const mod: number = 1e9 + 7

function idealArrays(n: number, maxValue: number): number {
    const dp: number[][] = matrixOfZeros(n + 1, maxValue + 1)
    dp[0][1] = 1

    for (let i: number = 1; i <= n; ++i) {
        for (let j: number = 1; j <= maxValue; ++j) {
            for (let k: number = j; k <= maxValue; k += j) {
                dp[i][k] = (dp[i][k] + dp[i - 1][j]) % mod
            }
        }
    }

    let result: number = 0
    for (let i: number = 1; i <= maxValue; ++i) {
        result = (result + dp[n][i]) % mod
    }

    return result
}
