import {matrixOfZeros} from "../../common/array-factories"

export {shortestCommonSupersequence}

function shortestCommonSupersequence(str1: string, str2: string): string {
    const dp: number[][] = matrixOfZeros(str1.length + 1, str2.length + 1)

    for (let i: number = 1; i <= str1.length; i++) {
        for (let j: number = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    let i: number = str1.length
    let j: number = str2.length
    let result: string = ""

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            result = str1[i - 1] + result
            i--
            j--
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            result = str1[i - 1] + result
            i--
        } else {
            result = str2[j - 1] + result
            j--
        }
    }

    while (i > 0) {
        result = str1[i - 1] + result
        i--
    }

    while (j > 0) {
        result = str2[j - 1] + result
        j--
    }

    return result
}
