export {Score, RankedScore, rankScores}

interface Score {
    id: number
    score: number
}

interface RankedScore {
    score: number
    rank: number
}

function rankScores(scores: Score[]): RankedScore[] {
    const sortedScores: Score[] = [...scores].sort((a: Score, b: Score): number => b.score - a.score)
    const uniqueScores: number[] = [...new Set<number>(sortedScores.map((score: Score): number => score.score))]

    return sortedScores.map((score: Score): RankedScore => ({
        score: score.score,
        rank: uniqueScores.indexOf(score.score) + 1,
    }))
}
