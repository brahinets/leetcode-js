import {permute} from '../script'

describe('46. Permutations', (): void => {
    it('Many permutations', (): void => {
        expect(permute([1, 2, 3]))
            .toEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]])
    })

    it('Few permutations', (): void => {
        expect(permute([0, 1]))
            .toEqual([[0, 1], [1, 0]])
    })

    it('No permutations', (): void => {
        expect(permute([1]))
            .toEqual([[1]])
    })
})
