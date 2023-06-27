import {kSmallestPairs} from '../script'

describe('373. Find K Pairs with Smallest Sums', (): void => {
    it('Return first three pairs', (): void => {
        expect(kSmallestPairs([1, 7, 11], [2, 4, 6], 3))
            .toEqual([[1, 2], [1, 4], [1, 6]]);
    });

    it('Return first two pairs', (): void => {
        expect(kSmallestPairs([1, 1, 2], [1, 2, 3], 2))
            .toEqual([[1, 1], [1, 1]]);
    });

    it('Return all pairs', (): void => {
        expect(kSmallestPairs([1, 2], [3], 3))
            .toEqual([[1, 3], [2, 3]]);
    });
})
