import {arrayOfZeros} from '../../common/array-factories'

export {stoneGameVIII}

function stoneGameVIII(stones: number[]): number {
    const stoneCount: number = stones.length
    const prefixSums: number[] = arrayOfZeros(stoneCount)

    prefixSums[0] = stones[0]

    for (let index: number = 1; index < stoneCount; index++) {
        prefixSums[index] = prefixSums[index - 1] + stones[index]
    }

    let bestScoreDifference: number = prefixSums[stoneCount - 1]

    for (let index: number = stoneCount - 2; index >= 1; index--) {
        bestScoreDifference = Math.max(bestScoreDifference, prefixSums[index] - bestScoreDifference)
    }

    return bestScoreDifference
}
