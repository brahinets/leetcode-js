import {eventualSafeNodes} from '../script'

describe('802. Find Eventual Safe States', (): void => {
    it('Zero safe nodes in empty graph ', (): void => {
        expect(eventualSafeNodes([]))
            .toStrictEqual([]);
    });

    it('Zero safe nodes in non empty graph ', (): void => {
        expect(eventualSafeNodes([[1], [0]]))
            .toStrictEqual([]);
    });

    it('Has one safe nodes', (): void => {
        expect(eventualSafeNodes([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]))
            .toStrictEqual([4]);
    });

    it('Has multiple safe nodes', (): void => {
        expect(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]))
            .toStrictEqual([2, 4, 5, 6]);
    });
});
