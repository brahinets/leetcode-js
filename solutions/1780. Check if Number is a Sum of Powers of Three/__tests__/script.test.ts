import {checkPowersOfThree} from '../script'

describe('1780. Check if Number is a Sum of Powers of Three', (): void => {
    it('Yes. Sum of two powers', (): void => {
        expect(checkPowersOfThree(12))
            .toBe(true)
    })

    it('Yes. Sum of one powers', (): void => {
        expect(checkPowersOfThree(9))
            .toBe(true)
    })

    it('Sum of many powers', (): void => {
        expect(checkPowersOfThree(91))
            .toBe(true)
    })

    it('Not', (): void => {
        expect(checkPowersOfThree(21))
            .toBe(false)
    })
})
