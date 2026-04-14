import {getPermutation} from '../script'

describe('60. Permutation Sequence', (): void => {
    it('kth permutation for medium k', (): void => {
        expect(getPermutation(3, 3))
            .toBe("213")
    })

    it('kth permutation for last k', (): void => {
        expect(getPermutation(3, 6))
            .toBe("321")
    })

    it('kth permutation for first k', (): void => {
        expect(getPermutation(3, 1))
            .toBe("123")
    })
})
