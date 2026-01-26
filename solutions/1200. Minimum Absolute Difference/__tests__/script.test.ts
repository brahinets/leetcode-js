import {minimumAbsDifference} from '../script'

describe('1200. Minimum Absolute Difference', (): void => {
    it('One', (): void => {
        expect(minimumAbsDifference([4, 2, 1, 3]))
            .toEqual([[1, 2], [2, 3], [3, 4]])
    })

    it('Two', (): void => {
        expect(minimumAbsDifference([1, 3, 6, 10, 15]))
            .toEqual([[1, 3]])
    })

    it('Three', (): void => {
        expect(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]))
            .toEqual([[-14, -10], [19, 23], [23, 27]])
    })
})
