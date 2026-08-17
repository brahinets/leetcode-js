import { arrayOfZeros, matrixOfZeros } from '../../common/array-factories'

export { stoneGameV }

function stoneGameV(stoneValue: number[]): number {
    const stoneCount: number = stoneValue.length
    const prefixSum: number[] = arrayOfZeros(stoneCount + 1)
    for (let index: number = 0; index < stoneCount; index++) {
        prefixSum[index + 1] = prefixSum[index] + stoneValue[index]
    }

    const maximumScore: number[][] = matrixOfZeros(stoneCount, stoneCount)
    for (let length: number = 2; length <= stoneCount; length++) {
        for (let left: number = 0; left + length - 1 < stoneCount; left++) {
            const right: number = left + length - 1
            maximumScore[left][right] = computeBestSplitScore(left, right, prefixSum, maximumScore)
        }
    }

    return maximumScore[0][stoneCount - 1]
}

function computeBestSplitScore(left: number, right: number, prefixSum: number[], maximumScore: number[][]): number {
    let bestScore: number = 0
    for (let middle: number = left; middle < right; middle++) {
        const leftSum: number = prefixSum[middle + 1] - prefixSum[left]
        const rightSum: number = prefixSum[right + 1] - prefixSum[middle + 1]
        if (leftSum < rightSum) {
            bestScore = Math.max(bestScore, leftSum + maximumScore[left][middle])
        } else if (leftSum > rightSum) {
            bestScore = Math.max(bestScore, rightSum + maximumScore[middle + 1][right])
        } else {
            bestScore = Math.max(bestScore, leftSum + Math.max(maximumScore[left][middle], maximumScore[middle + 1][right]))
        }
    }

    return bestScore
}
