import {minOperations} from '../script'

describe('3666. Minimum Operations to Equalize Binary String', (): void => {
    it('One flip solves it', (): void => {
        expect(minOperations('110', 1))
            .toBe(1)
    })

    it('Two flips solve it', (): void => {
        expect(minOperations('0101', 3))
            .toBe(2)
    })

    it('Impossible', (): void => {
        expect(minOperations('101', 2))
            .toBe(-1)
    })

    it('Already all ones', (): void => {
        expect(minOperations('1111', 2))
            .toBe(0)
    })

    it('Flip all zeros at once', (): void => {
        expect(minOperations('0000', 4))
            .toBe(1)
    })

    it('Single zero', (): void => {
        expect(minOperations('0', 1))
            .toBe(1)
    })

    it('Two zeros flipped one by one', (): void => {
        expect(minOperations('00', 1))
            .toBe(2)
    })

    it('Two zeros flipped together', (): void => {
        expect(minOperations('00', 2))
            .toBe(1)
    })
})
