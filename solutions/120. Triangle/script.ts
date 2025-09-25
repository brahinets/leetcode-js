import {matrixOfZeros} from "../../common/array-factories"

export {minimumTotal}

function minimumTotal(triangle: number[][]): number {
    const n: number = triangle.length
    const dp: number[][] = matrixOfZeros(n, n)

    dp[0][0] = triangle[0][0]

    for (let i: number = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0] + triangle[i][0]
        dp[i][i] = dp[i - 1][i - 1] + triangle[i][i]

        for (let j: number = 1; j < i; j++) {
            dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
        }
    }

    return Math.min(...dp[n - 1])
}
