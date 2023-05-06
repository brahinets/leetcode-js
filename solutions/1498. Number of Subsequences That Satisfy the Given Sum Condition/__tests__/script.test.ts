import {numSubseq} from '../script'

describe('1498. Number of Subsequences That Satisfy the Given Sum Condition', (): void => {
    it('Few', (): void => {
        expect(numSubseq([3, 5, 6, 7], 9))
            .toBe(4);
    });

    it('More', (): void => {
        expect(numSubseq([3, 3, 6, 8], 10))
            .toBe(6);
    });

    it('Many', (): void => {
        expect(numSubseq([2, 3, 3, 4, 6, 7], 12))
            .toBe(61);
    });

    it('Too many', (): void => {
        expect(numSubseq([12, 15, 10, 4, 5, 7, 6, 6, 9, 13, 1, 8, 2, 5, 2], 24))
            .toBe(32757);
    });
})
