import {countPermutations} from '../script'

describe('3577. Count the Number of Computer Unlocking Permutations', (): void => {
    it('There are possible permutations', (): void => {
        expect(countPermutations([1, 2, 3]))
            .toBe(2)
    })

    it('There are no possible permutations', (): void => {
        expect(countPermutations([3, 3, 3, 4, 4, 4]))
            .toBe(0)
    })
})
