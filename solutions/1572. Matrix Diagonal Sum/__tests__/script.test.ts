import {diagonalSum} from '../script'

describe('1572. Matrix Diagonal Sum', (): void => {
    it('Single', (): void => {
        expect(diagonalSum([[5]]))
            .toBe(5);
    });

    it('Odd size. Doubled center case', (): void => {
        expect(diagonalSum([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ])).toBe(25);
    });

    it('Even size', (): void => {
        expect(diagonalSum([
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]
        ])).toBe(8);
    });
})