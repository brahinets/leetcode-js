import { arrayOfZeros } from '../../common/array-factories'

export { stoneGameIII }

function stoneGameIII(piles: number[]): string {
    const pileCount: number = piles.length
    const scoreDifference: number[] = arrayOfZeros(pileCount + 1)
    for (let start: number = pileCount - 1; start >= 0; start--) {
        let takenSum: number = 0
        let bestDifference: number = Number.NEGATIVE_INFINITY
        for (let takeCount: number = 1; takeCount <= 3 && start + takeCount <= pileCount; takeCount++) {
            takenSum += piles[start + takeCount - 1]
            bestDifference = Math.max(bestDifference, takenSum - scoreDifference[start + takeCount])
        }

        scoreDifference[start] = bestDifference
    }

    if (scoreDifference[0] > 0) {
        return 'Alice'
    }

    if (scoreDifference[0] < 0) {
        return 'Bob'
    }

    return 'Tie'
}
