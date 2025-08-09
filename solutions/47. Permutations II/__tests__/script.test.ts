import {permuteUnique} from '../script'

describe('47. Permutations II', (): void => {
    it('Duplicates', (): void => {
        expect(permuteUnique([1, 1, 2]))
            .toEqual([[1, 1, 2], [1, 2, 1], [2, 1, 1]])
    })

    it('Unique', (): void => {
        expect(permuteUnique([1, 2, 3]))
            .toEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]])
    })
})
