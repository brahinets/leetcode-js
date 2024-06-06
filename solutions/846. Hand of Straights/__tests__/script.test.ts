import {isNStraightHand} from '../script'

describe('846. Hand of Straights', (): void => {

    it('Can be rearranged in one loop', (): void => {
        expect(isNStraightHand([2, 1], 2))
            .toBe(true)
    })

    it('Can be rearranged in multiple loops', (): void => {
        expect(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3))
            .toBe(true)
    })

    it('Cannot be rearranged due to small size', (): void => {
        expect(isNStraightHand([1, 2, 3], 4))
            .toBe(false)
    })

    it('Cannot be rearranged due to non sequential values', (): void => {
        expect(isNStraightHand([1, 5], 2))
            .toBe(false)
    })

    it('Cannot be rearranged after one loop', (): void => {
        expect(isNStraightHand([1, 2, 3, 4, 5], 4))
            .toBe(false)
    })
})
