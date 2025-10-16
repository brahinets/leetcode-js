import {findSmallestInteger} from '../script'

describe('2598. Smallest Missing Non-negative Integer After Operations', (): void => {
    it('One', (): void => {
        expect(findSmallestInteger([1, -10, 7, 13, 6, 8], 5))
            .toEqual(4)
    })

    it('Two', (): void => {
        expect(findSmallestInteger([1, -10, 7, 13, 6, 8], 7))
            .toEqual(2)
    })
})
