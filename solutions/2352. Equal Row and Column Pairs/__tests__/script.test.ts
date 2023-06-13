import {equalPairs} from '../script'

describe('2352. Equal Row and Column Pairs', (): void => {
    it('No pairs for empty matrix', (): void => {
        expect(equalPairs([]))
            .toBe(0);
    });

    it('No pairs for non-square matrix', (): void => {
        expect(equalPairs([[1, 2]]))
            .toBe(0);
    });

    it('One pair for small matrix', (): void => {
        expect(equalPairs([
            [3, 2, 1],
            [1, 7, 6],
            [2, 7, 7]
        ])).toBe(1);
    });

    it('Multiple pairs for big matrix', (): void => {
        expect(equalPairs([
            [3, 1, 2, 2],
            [1, 4, 4, 5],
            [2, 4, 2, 2],
            [2, 4, 2, 2]
        ])).toBe(3);
    });
});
