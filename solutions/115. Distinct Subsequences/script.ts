import {matrixOfZeros} from "../../common/array-factories"

export {numDistinct}

function numDistinct(s: string, t: string): number {
    const dp: number[][] = matrixOfZeros(s.length + 1, t.length + 1)

    for (let i: number = 0; i <= s.length; i++) {
        dp[i][0] = 1
    }

    for (let i: number = 1; i <= s.length; i++) {
        for (let j: number = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }

    return dp[s.length][t.length]
}
