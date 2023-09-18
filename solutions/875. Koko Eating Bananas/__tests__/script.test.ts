import {minEatingSpeed} from '../script'

describe('875. Koko Eating Bananas', (): void => {
    it('Zero multi-bite piles', (): void => {
        expect(minEatingSpeed([30, 11, 23, 4, 20], 5))
            .toBe(30)
    })

    it('One multi-bite pile', (): void => {
        expect(minEatingSpeed([30, 11, 23, 4, 20], 6))
            .toBe(23)
    })

    it('Multiple multi-bite piles', (): void => {
        expect(minEatingSpeed([3, 6, 7, 11], 8))
            .toBe(4)
    })
})
