import { RankedScore, rankScores, Score } from '../script'

describe('178. Rank Scores', () => {
    it('should rank scores from highest to lowest with dense ranking', () => {
        const scores: Score[] = [
            { id: 1, score: 3.5 },
            { id: 2, score: 3.65 },
            { id: 3, score: 4.0 },
            { id: 4, score: 3.85 },
            { id: 5, score: 4.0 },
            { id: 6, score: 3.65 }
        ]
        const expected: RankedScore[] = [
            { score: 4.0, rank: 1 },
            { score: 4.0, rank: 1 },
            { score: 3.85, rank: 2 },
            { score: 3.65, rank: 3 },
            { score: 3.65, rank: 3 },
            { score: 3.5, rank: 4 }
        ]
        expect(rankScores(scores)).toEqual(expected)
    })

    it('rank 1 for all scores when all are equal', () => {
        const scores: Score[] = [
            { id: 1, score: 5.0 },
            { id: 2, score: 5.0 },
            { id: 3, score: 5.0 }
        ]
        const expected: RankedScore[] = [
            { score: 5.0, rank: 1 },
            { score: 5.0, rank: 1 },
            { score: 5.0, rank: 1 }
        ]
        expect(rankScores(scores)).toEqual(expected)
    })

    it('should assign consecutive ranks with no gaps after ties', () => {
        const scores: Score[] = [
            { id: 1, score: 10.0 },
            { id: 2, score: 10.0 },
            { id: 3, score: 8.0 },
            { id: 4, score: 6.0 }
        ]
        const expected: RankedScore[] = [
            { score: 10.0, rank: 1 },
            { score: 10.0, rank: 1 },
            { score: 8.0, rank: 2 },
            { score: 6.0, rank: 3 }
        ]
        expect(rankScores(scores)).toEqual(expected)
    })

    it('single ranked score when there is only one entry', () => {
        const scores: Score[] = [{ id: 1, score: 7.5 }]
        const expected: RankedScore[] = [{ score: 7.5, rank: 1 }]
        expect(rankScores(scores)).toEqual(expected)
    })

    it('empty array when input is empty', () => {
        const scores: Score[] = []
        expect(rankScores(scores)).toEqual([])
    })

    it('should assign unique ranks when all scores are distinct', () => {
        const scores: Score[] = [
            { id: 1, score: 1.0 },
            { id: 2, score: 2.0 },
            { id: 3, score: 3.0 }
        ]
        const expected: RankedScore[] = [
            { score: 3.0, rank: 1 },
            { score: 2.0, rank: 2 },
            { score: 1.0, rank: 3 }
        ]
        expect(rankScores(scores)).toEqual(expected)
    })
})
