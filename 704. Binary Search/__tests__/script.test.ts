import {search} from '../script'

describe('704. Binary Search', (): void => {
    it('Element not found', (): void => {
        expect(search([-1, 0, 3, 5, 9, 12], 2))
            .toBe(-1);
    });

    it('Element found on odd index', (): void => {
        expect(search([-1, 0, 3, 9, 12], 9))
            .toBe(3);
    });

    it('Element found on even index', (): void => {
        expect(search([-1, 0, 3, 4, 9, 12], 9))
            .toBe(4);
    });
});