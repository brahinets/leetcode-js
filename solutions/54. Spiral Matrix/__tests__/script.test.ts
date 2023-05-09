import {spiralOrder} from '../script'

describe('54. Spiral Matrix', (): void => {
    it('Single element', (): void => {
        expect(spiralOrder([[5]]))
            .toStrictEqual([5]);
    });

    it('Single column', (): void => {
        expect(spiralOrder([
            [3],
            [2]
        ])).toStrictEqual([3, 2]);
    });

    it('Single higher column', (): void => {
        expect(spiralOrder([
            [7],
            [9],
            [6]
        ])).toStrictEqual([7, 9, 6]);
    });

    it('Single row', (): void => {
        expect(spiralOrder([
            [3, 2]
        ])).toStrictEqual([3, 2]);
    });

    it('Single longer row', (): void => {
        expect(spiralOrder([
            [7, 9, 6]
        ])).toStrictEqual([7, 9, 6]);
    });

    it('Square', (): void => {
        expect(spiralOrder([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ])).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it('Non square', (): void => {
        expect(spiralOrder([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
        ])).toStrictEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    });
})