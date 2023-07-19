import {eraseOverlapIntervals} from '../script'

describe('435. Non-overlapping Intervals', (): void => {
    it('Remove nothing, already non overlapping', (): void => {
        expect(eraseOverlapIntervals([[1, 2], [2, 3]]))
            .toBe(0);
    });

    it('Remove one, to non overlap', (): void => {
        expect(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]))
            .toBe(1);
    });

    it('Remove multiple, to non overlap', (): void => {
        expect(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]))
            .toBe(2);
    });
})
