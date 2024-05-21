import {subsets} from '../script'

describe('78. Subsets', (): void => {

    it('Empty subset only', (): void => {
        expect(subsets([]))
            .toEqual([[]])
    })

    it('Several subsets', (): void => {
        expect(subsets([0]))
            .toEqual([[], [0]])
    })

    it('Many subsets', (): void => {
        expect(subsets([1, 2, 3]))
            .toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
    })
})
