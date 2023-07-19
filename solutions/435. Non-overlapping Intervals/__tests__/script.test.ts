import {eraseOverlapIntervals} from '../script'

describe('435. Non-overlapping Intervals', (): void => {
    it('Remove nothing, already non overlapping empty', (): void => {
        expect(eraseOverlapIntervals([]))
            .toBe(0);
    });

    it('Remove nothing, already non overlapping non-empty', (): void => {
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

    it('Remove multiple, to non overlap. Load Test', (): void => {
        expect(eraseOverlapIntervals([[-52, 31], [-73, -26], [82, 97], [-65, -11], [-62, -49], [95, 99], [58, 95], [-31, 49], [66, 98], [-63, 2], [30, 47], [-40, -26]]))
            .toBe(7);
    });
})
