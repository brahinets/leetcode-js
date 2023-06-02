import {shortestPathBinaryMatrix} from '../script'

describe('1091. Shortest Path in Binary Matrix', (): void => {
    it('No path for empty matrix', (): void => {
        expect(shortestPathBinaryMatrix([]))
            .toBe(-1);
    });

    it('No path for no-start matrix', (): void => {
        expect(shortestPathBinaryMatrix([
            [1, 0, 0],
            [1, 1, 0],
            [1, 1, 0]
        ])).toBe(-1);
    });

    it('No path for no-end matrix', (): void => {
        expect(shortestPathBinaryMatrix([
            [0, 0, 0],
            [1, 1, 0],
            [1, 1, 1]
        ])).toBe(-1);
    });

    it('Short path', (): void => {
        expect(shortestPathBinaryMatrix([
            [0, 1],
            [1, 0]
        ])).toBe(2);
    });

    it('Middle path', (): void => {
        expect(shortestPathBinaryMatrix([
            [0, 0, 0],
            [1, 1, 0],
            [1, 1, 0]
        ])).toBe(4);
    });

    it('Long path', (): void => {
        expect(shortestPathBinaryMatrix([
            [0, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1],
            [0, 1, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0]
        ])).toBe(7);
    });
});
