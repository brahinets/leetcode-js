import {reverse} from '../script'

describe('7. Reverse Integer', (): void => {
    it('Reverse positive', (): void => {
        expect(reverse(123))
            .toBe(321)
    })

    it('Reverse zeros', (): void => {
        expect(reverse(120))
            .toBe(21)
    })

    it('Reverse negative', (): void => {
        expect(reverse(-123))
            .toBe(-321)
    })
})
