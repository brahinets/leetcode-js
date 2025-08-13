import {isPowerOfThree} from '../script'

describe('326. Power of Three', (): void => {
    it('Positive power', (): void => {
        expect(isPowerOfThree(27))
            .toBe(true)
    })

    it('One power', (): void => {
        expect(isPowerOfThree(3))
            .toBe(true)
    })

    it('Zero power', (): void => {
        expect(isPowerOfThree(1))
            .toBe(true)
    })

    it('Impossible to have zero', (): void => {
        expect(isPowerOfThree(0))
            .toBe(false)
    })

    it('Impossible to have negative', (): void => {
        expect(isPowerOfThree(-1))
            .toBe(false)
    })
})
