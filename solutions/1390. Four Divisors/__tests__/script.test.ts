import {sumFourDivisors} from '../script'

describe('1390. Four Divisors', (): void => {
    it('Many', (): void => {
        expect(sumFourDivisors([21, 21]))
            .toBe(64)
    })

    it('Several', (): void => {
        expect(sumFourDivisors([21, 4, 7]))
            .toBe(32)
    })

    it('No', (): void => {
        expect(sumFourDivisors([1, 2, 3, 4, 5]))
            .toBe(0)
    })
})
