import {checkStraightLine} from '../script'

describe('1232. Check If It Is a Straight Line', (): void => {
    it('The same line', (): void => {
        expect(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]))
            .toBe(true);
    });

    it('The same line with negative coordinates', (): void => {
        expect(checkStraightLine([[0, 0], [0, 1], [0, -1]]))
            .toBe(true);
    });

    it('Not the same line', (): void => {
        expect(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]))
            .toBe(false);
    });

    it('Not the same line with negative coordinates', (): void => {
        expect(checkStraightLine([[0, 0], [0, 1], [0, -2]]))
            .toBe(false);
    });
});
