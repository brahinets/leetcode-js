import {matrixOfZeros} from "../../common/array-factories"

export {maxPoints}

function maxPoints(points: number[][]): number {
    const dp: number[][] = matrixOfZeros(points.length, points[0].length)

    let max: number = 0
    for (let j: number = 0; j < points[0].length; j++) {
        dp[0][j] = points[0][j]
        max = Math.max(max, dp[0][j])
    }

    for (let i: number = 1; i < points.length; i++) {
        let leftMax: number = dp[i - 1][0]
        for (let j = 0; j < points[0].length; j++) {
            leftMax = Math.max(leftMax - 1, dp[i - 1][j])
            dp[i][j] = Math.max(dp[i][j], leftMax + points[i][j])
            max = Math.max(max, dp[i][j])
        }

        let rightMax: number = dp[i - 1][points[0].length - 1]
        for (let j: number = points[0].length - 1; j >= 0; j--) {
            rightMax = Math.max(rightMax - 1, dp[i - 1][j])
            dp[i][j] = Math.max(dp[i][j], rightMax + points[i][j])
            max = Math.max(max, dp[i][j])
        }
    }

    return max
}
