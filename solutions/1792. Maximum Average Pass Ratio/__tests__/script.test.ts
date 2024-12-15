import {maxAverageRatio} from '../script'

describe('1792. Maximum Average Pass Ratio', (): void => {
    it('One', (): void => {
        expect(maxAverageRatio([[1, 2], [3, 5], [2, 2]], 2))
            .toBeCloseTo(0.78333, 5)
    })

    it('Two', (): void => {
        expect(maxAverageRatio([[2, 4], [3, 9], [4, 5], [2, 10]], 4))
            .toBeCloseTo(0.53485, 5)
    })
})
