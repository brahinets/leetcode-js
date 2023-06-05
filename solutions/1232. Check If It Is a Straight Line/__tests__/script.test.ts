import {checkStraightLine} from '../script'

describe('1232. Check If It Is a Straight Line', (): void => {
    it('The same line', (): void => {
        expect(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]))
            .toBe(true);
    });

    it('Not the same line', (): void => {
        expect(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]))
            .toBe(false);
    });
});
