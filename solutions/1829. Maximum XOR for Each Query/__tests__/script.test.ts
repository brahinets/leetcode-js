import {getMaximumXor} from '../script'

describe('1829. Maximum XOR for Each Query', (): void => {
    it('One', (): void => {
        expect(getMaximumXor([0, 1, 1, 3], 2))
            .toEqual([0, 3, 2, 3])
    })

    it('Two', (): void => {
        expect(getMaximumXor([2, 3, 4, 7], 3))
            .toEqual([5, 2, 6, 5])
    })

    it('Three', (): void => {
        expect(getMaximumXor([0, 1, 2, 2, 5, 7], 3))
            .toEqual([4, 3, 6, 4, 6, 7])
    })
})
