import {matrixOfZeros} from "../../common/array-factories"

export {countVowelPermutation}

const mod: number = 1e9 + 7

function countVowelPermutation(n: number): number {
    const dp: number[][] = matrixOfZeros(n, 5)
    for (let i: number = 0; i < 5; i++) {
        dp[0][i] = 1
    }

    for (let i: number = 1; i < n; i++) {
        dp[i][0] = (dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][4]) % mod
        dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % mod
        dp[i][2] = (dp[i - 1][1] + dp[i - 1][3]) % mod
        dp[i][3] = dp[i - 1][2]
        dp[i][4] = (dp[i - 1][2] + dp[i - 1][3]) % mod
    }

    return dp[n - 1].reduce((acc: number, val: number): number => (acc + val) % mod, 0)
}
