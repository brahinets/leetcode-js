import {isPowerOfTwo} from '../script'

describe('231. Power of Two', (): void => {

    it('Yes. Zero power', (): void => {
        expect(isPowerOfTwo(1))
            .toBe(true)
    })

    it('Yes. Four power', (): void => {
        expect(isPowerOfTwo(16))
            .toBe(true)
    })

    it('Not a power', (): void => {
        expect(isPowerOfTwo(3))
            .toBe(false)
    })
})
