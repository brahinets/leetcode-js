import { largestOverlap } from '../script'

describe('835. Image Overlap', (): void => {
    it('Overlap partially', (): void => {
        expect(largestOverlap([[1, 1, 0], [0, 1, 0], [0, 1, 0]], [[0, 0, 0], [0, 1, 1], [0, 0, 1]]))
            .toEqual(3)
    })

    it('Overlap fully', (): void => {
        expect(largestOverlap([[1]], [[1]]))
            .toEqual(1)
    })

    it('Overlap nothing', (): void => {
        expect(largestOverlap([[0]], [[0]]))
            .toEqual(0)
    })
})
