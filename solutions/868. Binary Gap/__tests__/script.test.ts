import { binaryGap } from '../script'

describe('868. Binary Gap', (): void => {
    it('gap of 2 for 22 (binary: 10110)', (): void => {
        expect(binaryGap(22))
            .toBe(2)
    })

    it('gap of 2 for 5 (binary: 101)', (): void => {
        expect(binaryGap(5))
            .toBe(2)
    })

    it('gap of 1 for 6 (binary: 110)', (): void => {
        expect(binaryGap(6))
            .toBe(1)
    })

    it('gap of 0 for 8 (binary: 1000)', (): void => {
        expect(binaryGap(8))
            .toBe(0)
    })

    it('gap of 0 for 1 (binary: 1)', (): void => {
        expect(binaryGap(1))
            .toBe(0)
    })
})
