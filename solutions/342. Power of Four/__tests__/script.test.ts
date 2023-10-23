import {isPowerOfFour} from '../script'

describe('342. Power of Four', (): void => {
    it('Yes. Zero power', (): void => {
        expect(isPowerOfFour(1))
            .toBe(true)
    })

    it('Yes. Zero power', (): void => {
        expect(isPowerOfFour(16))
            .toBe(true)
    })

    it('Not a power', (): void => {
        expect(isPowerOfFour(5))
            .toBe(false)
    })
})
