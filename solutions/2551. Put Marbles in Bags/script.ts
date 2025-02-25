export {putMarbles}

function putMarbles(weights: number[], k: number): number {
    if (weights.length < k) {
        throw new Error("Not enough data")
    }

    const pairWeights: number[] = collectWeights(weights)

    let answer: number = 0
    for (let i: number = 0; i < k - 1; ++i) {
        answer += pairWeights[(weights.length - 1) - i - 1] - pairWeights[i]
    }

    return answer
}

function collectWeights(weights: number[]): number[] {
    let pairWeights: number[] = []

    for (let i: number = 0; i < weights.length - 1; ++i) {
        pairWeights[i] = weights[i] + weights[i + 1]
    }

    return pairWeights.sort((a: number, b: number): number => a - b)
}
