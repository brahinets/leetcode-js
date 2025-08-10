import {reorderedPowerOf2} from '../script'

describe('869. Reordered Power of 2', (): void => {
    it('Zero power', (): void => {
        expect(reorderedPowerOf2(1))
            .toBe(true)
    })

    it('Simple true', (): void => {
        expect(reorderedPowerOf2(4))
            .toBe(true)
    })

    it('Simple false', (): void => {
        expect(reorderedPowerOf2(5))
            .toBe(false)
    })

    it('Complex false', (): void => {
        expect(reorderedPowerOf2(11))
            .toBe(false)
    })

    it('Complex true', (): void => {
        expect(reorderedPowerOf2(61))
            .toBe(true)
    })
})
