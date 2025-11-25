import {smallestRepunitDivByK} from '../script'

describe('1015. Smallest Integer Divisible by K', (): void => {
    it('One', (): void => {
        expect(smallestRepunitDivByK(1))
            .toBe(1)
    })

    it('No such number. One is not divisible by 2', (): void => {
        expect(smallestRepunitDivByK(2))
            .toBe(-1)
    })

    it('Three', (): void => {
        expect(smallestRepunitDivByK(3))
            .toBe(3)
    })
})
