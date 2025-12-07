import {matrixOf} from "../../common/array-factories"

export {isInterleave}

function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s1.length + s2.length !== s3.length) {
        return false
    }

    const dp: boolean[][] = matrixOf(false, s1.length + 1, s2.length + 1)
    dp[0][0] = true

    for (let i: number = 0; i <= s1.length; i++) {
        for (let j: number = 0; j <= s2.length; j++) {
            const k: number = i + j - 1

            if (i > 0 && s1[i - 1] === s3[k]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j]
            }

            if (j > 0 && s2[j - 1] === s3[k]) {
                dp[i][j] = dp[i][j] || dp[i][j - 1]
            }
        }
    }

    return dp[s1.length][s2.length]
}
