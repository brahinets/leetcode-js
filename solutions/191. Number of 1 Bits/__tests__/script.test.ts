import {hammingWeight} from '../script'

describe('191. Number of 1 Bits', (): void => {

    it('Zero', (): void => {
        expect(hammingWeight(0b00000000000000000000000000000000))
            .toBe(0)
    })

    it('One', (): void => {
        expect(hammingWeight(0b00000000000000000000000010000000))
            .toBe(1)
    })

    it('Several', (): void => {
        expect(hammingWeight(0b00000000000000000000000000001011))
            .toBe(3)
    })

    it('Many', (): void => {
        expect(hammingWeight(0b11111111111111111111111111111101))
            .toBe(31)
    })
})
