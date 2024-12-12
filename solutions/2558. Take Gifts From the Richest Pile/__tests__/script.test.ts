import {pickGifts} from '../script'

describe('2558. Take Gifts From the Richest Pile', (): void => {
    it('Has choice', (): void => {
        expect(pickGifts([25, 64, 9, 4, 100], 4))
            .toBe(29)
    })

    it('No choice', (): void => {
        expect(pickGifts([1, 1, 1, 1], 4))
            .toBe(4)
    })
})
