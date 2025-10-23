import {hasSameDigits} from '../script'

describe('3461. Check If Digits Are Equal in String After Operations I', (): void => {
    it('One', (): void => {
        expect(hasSameDigits("3902"))
            .toBe(true)
    })

    it('Two', (): void => {
        expect(hasSameDigits("34789"))
            .toBe(false)
    })

    it('Three', (): void => {
        expect(hasSameDigits("34789"))
            .toBe(false)
    })
})
