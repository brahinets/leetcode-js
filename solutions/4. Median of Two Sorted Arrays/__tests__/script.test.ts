import {findMedianSortedArrays} from '../script'

describe('4. Median of Two Sorted Arrays', (): void => {
    it('Odd size', (): void => {
        expect(findMedianSortedArrays([1, 3], [2]))
            .toBe(2)
    });

    it('Even size', (): void => {
        expect(findMedianSortedArrays([1, 2], [3, 4]))
            .toBe(2.5)
    });
})
