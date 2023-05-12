import {mostPoints} from '../script'

describe('2140. Solving Questions With Brainpower', (): void => {
    it('Skip first', (): void => {
        expect(mostPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]))
            .toBe(7);
    });

    it('Skip non first', (): void => {
        expect(mostPoints([[3, 2], [4, 3], [4, 4], [2, 5]]))
            .toBe(5);
    });
})