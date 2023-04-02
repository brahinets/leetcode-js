import {uniquePaths} from '../script'

describe('62. Unique Paths', (): void => {
    it('One way', (): void => {
        expect(uniquePaths(1, 1)).toBe(1);
    });

    it('Few ways', (): void => {
        expect(uniquePaths(3, 2)).toBe(3);
    });

    it('Many ways', (): void => {
        expect(uniquePaths(3, 7)).toBe(28);
    });
});