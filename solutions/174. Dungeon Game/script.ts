import { matrixOfZeros } from "../../common/array-factories"

export { calculateMinimumHP }

function calculateMinimumHP(dungeon: number[][]): number {
    const m: number = dungeon.length
    const n: number = dungeon[0].length
    const dp: number[][] = matrixOfZeros(m, n)

    for (let i: number = m - 1; i >= 0; i--) {
        for (let j: number = n - 1; j >= 0; j--) {
            if (i === m - 1 && j === n - 1) {
                dp[i][j] = Math.max(1, 1 - dungeon[i][j])
            } else if (i === m - 1) {
                dp[i][j] = Math.max(1, dp[i][j + 1] - dungeon[i][j])
            } else if (j === n - 1) {
                dp[i][j] = Math.max(1, dp[i + 1][j] - dungeon[i][j])
            } else {
                dp[i][j] = Math.max(1, Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j])
            }
        }
    }

    return dp[0][0]
}
