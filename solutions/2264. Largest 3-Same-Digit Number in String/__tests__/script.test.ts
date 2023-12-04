import {largestGoodInteger} from '../script'

describe('2264. Largest 3-Same-Digit Number in String', (): void => {

    it('No largest', (): void => {
        expect(largestGoodInteger("42352338"))
            .toBe("")
    })

    it('One three-digit', (): void => {
        expect(largestGoodInteger("2300019"))
            .toBe("000")
    })

    it('Largest of two three-digits', (): void => {
        expect(largestGoodInteger("6777133339"))
            .toBe("777")
    })
})


