import {addDigits} from '../script'

describe('258. Add Digits', (): void => {

    it('Zero', (): void => {
        expect(addDigits(0))
            .toBe(0)
    })

    it('One-digit number', (): void => {
        expect(addDigits(7))
            .toBe(7)
    })

    it('Multi-digit number', (): void => {
        expect(addDigits(38))
            .toBe(2)
    })
})
