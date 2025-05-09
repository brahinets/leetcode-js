import {countBalancedPermutations} from '../script'

describe('3343. Count Number of Balanced Permutations', (): void => {
    it('Multiple permutations', (): void => {
        expect(countBalancedPermutations("123"))
            .toBe(2)
    })

    it('The only permutation', (): void => {
        expect(countBalancedPermutations("112"))
            .toBe(1)
    })

    it('Zero permutations', (): void => {
        expect(countBalancedPermutations("12345"))
            .toBe(0)
    })
})
