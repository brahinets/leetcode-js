import {matrixOfZeros} from "../../common/array-factories"

export {maxValue}

function maxValue(events: number[][], k: number): number {
    events.sort((a: number[], b: number[]): number => a[1] - b[1] || a[0] - b[0] || b[2] - a[2])

    const dp: number[][] = matrixOfZeros(events.length + 1, k + 1)
    for (let i: number = 1; i <= events.length; i++) {
        const [start, _, value] = events[i - 1]
        for (let j: number = 1; j <= k; j++) {
            dp[i][j] = dp[i - 1][j]

            let prevIndex: number = i - 1
            while (prevIndex > 0 && events[prevIndex - 1][1] >= start) {
                prevIndex--
            }

            dp[i][j] = Math.max(dp[i][j], dp[prevIndex][j - 1] + value)
        }
    }

    return dp[events.length][k]
}
