import { matrixOfZeros } from '../../common/array-factories'

export { stoneGame }

function stoneGame(piles: number[]): boolean {
    const pileCount: number = piles.length
    const scoreDifference: number[][] = matrixOfZeros(pileCount, pileCount)
    for (let index: number = 0; index < pileCount; index++) {
        scoreDifference[index][index] = piles[index]
    }

    for (let length: number = 2; length <= pileCount; length++) {
        for (let start: number = 0; start <= pileCount - length; start++) {
            const end: number = start + length - 1
            scoreDifference[start][end] = Math.max(
                piles[start] - scoreDifference[start + 1][end],
                piles[end] - scoreDifference[start][end - 1]
            )
        }
    }

    return scoreDifference[0][pileCount - 1] > 0
}
