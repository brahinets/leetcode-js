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

    it('Has all indirectly safe nodes', (): void => {
        expect(eventualSafeNodes([[], [0, 2, 3, 4], [3], [4], []]))
            .toStrictEqual([0, 1, 2, 3, 4]);
    });

    it('Has some indirectly safe nodes due to loops', (): void => {
        expect(eventualSafeNodes([[2, 3], [2, 3, 4], [3, 4], [], [1]]))
            .toStrictEqual([3]);
    });
});
