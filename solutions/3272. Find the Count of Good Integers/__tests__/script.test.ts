import {countGoodIntegers} from '../script'

describe('3272. Find the Count of Good Integers', (): void => {
    it('Several', (): void => {
        expect(countGoodIntegers(1, 4))
            .toBe(2)
    })

    it('Some', (): void => {
        expect(countGoodIntegers(3, 5))
            .toBe(27)
    })

    it('Many', (): void => {
        expect(countGoodIntegers(5, 6))
            .toBe(2468)
    })
})
