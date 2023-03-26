import {floodFill} from '../script'

describe('733. Flood Fill', (): void => {
    it('Fill neighbours', (): void => {
        expect(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))
            .toStrictEqual([[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
    });

    it('No neighbours for fill', (): void => {
        expect(floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 0))
            .toStrictEqual([[0, 0, 0], [0, 0, 0]]);
    });
});