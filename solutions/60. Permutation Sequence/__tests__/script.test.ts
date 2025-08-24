import {getPermutation} from '../script'

describe('60. Permutation Sequence', (): void => {
    it('Return medium', (): void => {
        expect(getPermutation(3, 3))
            .toBe("213")
    })

    it('Return last', (): void => {
        expect(getPermutation(3, 6))
            .toBe("321")
    })

    it('Return first', (): void => {
        expect(getPermutation(3, 1))
            .toBe("123")
    })
})
