import {maximum69Number} from '../script'

describe('1323. Maximum 69 Number', (): void => {
    it('Changing multiple digits results', (): void => {
        expect(maximum69Number(9669))
            .toBe(9969)
    })

    it('Changing the last digit', (): void => {
        expect(maximum69Number(9996))
            .toBe(9999)
    })

    it('It is better not to apply any change', (): void => {
        expect(maximum69Number(9999))
            .toBe(9999)
    })
})
