import {maxProbability} from '../script'

describe('1514. Path with Maximum Probability', (): void => {
    it('Has one path', (): void => {
        expect(maxProbability(3, [[0, 1], [1, 2], [3, 2]], [0.5, 0.5, 0.2], 0, 2))
            .toBe(0.25000);
    });

    it('Has multiple paths, use longer', (): void => {
        expect(maxProbability(3, [[0, 1], [1, 2], [0, 2]], [0.5, 0.5, 0.2], 0, 2))
            .toBe(0.25000);
    });

    it('Has multiple paths, use shorter', (): void => {
        expect(maxProbability(3, [[0, 1], [1, 2], [0, 2]], [0.5, 0.5, 0.3], 0, 2))
            .toBe(0.3000);
    });

    it('Multiple paths with complex probability and reversed', (): void => {
        expect(maxProbability(5, [[1, 4], [2, 4], [0, 4], [0, 3], [0, 2], [2, 3]], [0.37, 0.17, 0.93, 0.23, 0.39, 0.04], 3, 4))
            .toBe(0.21390);
    });

    it('Has multiple paths, use reversed', (): void => {
        expect(maxProbability(3, [[0, 1], [0, 2], [0, 3], [1, 2], [3, 1]], [0.5, 1, 2, 0.5, 0.5], 0, 2))
            .toBe(1);
    });

    it('No path available', (): void => {
        expect(maxProbability(3, [[0, 1]], [0.5], 0, 2))
            .toBe(0.0);
    });
});
