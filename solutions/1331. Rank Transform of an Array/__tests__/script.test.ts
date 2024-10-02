import {arrayRankTransform} from '../script'

describe('1331. Rank Transform of an Array', (): void => {
    it('Simple ranging', (): void => {
        expect(arrayRankTransform([40, 10, 20, 30]))
            .toEqual([4, 1, 2, 3])
    })

    it('Same elements share the same rank', (): void => {
        expect(arrayRankTransform([100, 100, 100]))
            .toEqual([1, 1, 1])
    })

    it('Complex ranging', (): void => {
        expect(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]))
            .toEqual([5, 3, 4, 2, 8, 6, 7, 1, 3])
    })
})
