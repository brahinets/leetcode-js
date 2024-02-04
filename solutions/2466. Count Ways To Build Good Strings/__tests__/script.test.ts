import {countGoodStrings} from '../script'

describe('2466. Count Ways To Build Good Strings', (): void => {
    it('Few', (): void => {
        expect(countGoodStrings(3, 3, 1, 1))
            .toBe(8)
    })

    it('More', (): void => {
        expect(countGoodStrings(2, 3, 1, 2))
            .toBe(5)
    })
})
