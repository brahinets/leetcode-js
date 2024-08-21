import {matrixOfZeros} from "../../common/array-factories"

export {strangePrinter}

function strangePrinter(s: string): number {
    const dp: number[][] = matrixOfZeros(s.length, s.length)

    for (let i: number = s.length - 1; i >= 0; i--) {
        dp[i][i] = 1

        for (let j: number = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i][j - 1]
            } else {
                let min: number = Infinity

                for (let k: number = i; k < j; k++) {
                    min = Math.min(min, dp[i][k] + dp[k + 1][j])
                }

                dp[i][j] = min
            }
        }
    }

    return dp[0][s.length - 1]
}
