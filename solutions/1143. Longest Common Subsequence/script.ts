import {matrixOfZeros} from "../../common/array-factories"

export {longestCommonSubsequence}

function longestCommonSubsequence(text1: string, text2: string): number {
    const dp: number[][] = matrixOfZeros(text1.length + 1, text2.length + 1)

    for (let i: number = 1; i <= text1.length; i++) {
        for (let j: number = 1; j <= text2.length; j++) {
            dp[i][j] = Math.max(
                dp[i - 1][j],
                dp[i][j - 1],
                dp[i - 1][j - 1] + (text1[i - 1] === text2[j - 1] ? 1 : 0)
            )
        }
    }

    return dp[text1.length][text2.length]
}
