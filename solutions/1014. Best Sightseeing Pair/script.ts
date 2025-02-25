export {maxScoreSightseeingPair}

function maxScoreSightseeingPair(values: number[]): number {
    let maxScore: number = 0
    let maxLeft: number = values[0]

    for (let i: number = 1; i < values.length; i++) {
        maxScore = Math.max(maxScore, maxLeft + values[i] - i)
        maxLeft = Math.max(maxLeft, values[i] + i)
    }

    return maxScore
}
