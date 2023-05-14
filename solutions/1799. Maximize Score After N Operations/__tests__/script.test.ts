import {maxScore} from '../script'

describe('1799. Maximize Score After N Operations', (): void => {
    it('Few', (): void => {
        expect(maxScore([1, 2]))
            .toBe(1);
    });

    it('More', (): void => {
        expect(maxScore([3, 4, 6, 8]))
            .toBe(11);
    });

    it('Many', (): void => {
        expect(maxScore([1, 2, 3, 4, 5, 6]))
            .toBe(14);
    });
})