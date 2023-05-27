import {maxScore} from '../script'

describe('2542. Maximum Subsequence Score', (): void => {
    it('Some', (): void => {
        expect(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3))
            .toBe(12);
    });

    it('More', (): void => {
        expect(maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1))
            .toBe(30);
    });

    it('Many', (): void => {
        expect(maxScore([23, 16, 20, 7, 3], [19, 21, 22, 22, 12], 3))
            .toBe(1121);
    });
})