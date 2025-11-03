import {subsetsWithDup} from '../script'

describe('90. Subsets II', (): void => {
    it('Simple', (): void => {
        expect(subsetsWithDup([0]))
            .toEqual([[], [0]])
    })

    it('Complex', (): void => {
        expect(subsetsWithDup([1, 2, 2]))
            .toEqual([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]])
    })
})
