import {maximumScore} from '../script'

describe('2818. Apply Operations to Maximize Score', (): void => {
    it('One', (): void => {
        expect(maximumScore([8, 3, 9, 3, 8], 2))
            .toBe(81)
    })

    it('Two', (): void => {
        expect(maximumScore([19, 12, 14, 6, 10, 18], 3))
            .toBe(4788)
    })

    it('Load test', (): void => {
        expect(maximumScore([2, 1, 14, 5, 18, 1, 8, 5], 34))
            .toBe(799392504)
    })
})
