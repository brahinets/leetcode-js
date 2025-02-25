import {rangeSum} from '../script'

describe('1508. Range Sum of Sorted Subarray Sums', (): void => {
    it('Sum part', (): void => {
        expect(rangeSum([1, 2, 3, 4], 4, 3, 4))
            .toBe(6)
    })

    it('Sum many', (): void => {
        expect(rangeSum([1, 2, 3, 4], 4, 1, 5))
            .toBe(13)
    })

    it('Sum all', (): void => {
        expect(rangeSum([1, 2, 3, 4], 4, 1, 10))
            .toBe(50)
    })
})
