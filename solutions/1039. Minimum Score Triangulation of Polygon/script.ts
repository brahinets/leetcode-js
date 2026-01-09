import {matrixOfZeros} from "../../common/array-factories"

export {minScoreTriangulation}

function minScoreTriangulation(values: number[]): number {
    const length: number = values.length
    const dp: number[][] = matrixOfZeros(length, length)

    for (let size: number = 2; size < length; size++) {
        for (let left: number = 0; left + size < length; left++) {
            const right: number = left + size

            dp[left][right] = Number.MAX_SAFE_INTEGER

            for (let mid: number = left + 1; mid < right; mid++) {
                dp[left][right] = Math.min(
                    dp[left][right],
                    dp[left][mid] + dp[mid][right] + values[left] * values[mid] * values[right],
                )
            }
        }

    }

    return dp[0][length - 1]
}
