import { mirrorDistance } from '../script'

describe('3783. Mirror Distance of an Integer', (): void => {

    it('single digit', (): void => {
        expect(mirrorDistance(7))
            .toBe(0)
    })

    it('trailing zeros collapse after reversing', (): void => {
        expect(mirrorDistance(10))
            .toBe(9)
    })

    it('two-digit number reversed is larger', (): void => {
        expect(mirrorDistance(25))
            .toBe(27)
    })

    it('palindrome number', (): void => {
        expect(mirrorDistance(121))
            .toBe(0)
    })

    it('large number', (): void => {
        expect(mirrorDistance(1000000000))
            .toBe(999999999)
    })

})
