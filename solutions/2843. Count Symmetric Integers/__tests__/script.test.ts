import {countSymmetricIntegers} from '../script'

describe('2843. Count Symmetric Integers', (): void => {
    it('Some symmetric', (): void => {
        expect(countSymmetricIntegers(1, 100))
            .toBe(9)
    })

    it('Many symmetric', (): void => {
        expect(countSymmetricIntegers(1200, 1230))
            .toBe(4)
    })

    it('No symmetric', (): void => {
        expect(countSymmetricIntegers(3, 5))
            .toBe(0)
    })
})
