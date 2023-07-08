import {putMarbles} from '../script'

describe('2551. Put Marbles in Bags', (): void => {

    it('Not enough data', (): void => {
        expect(() => putMarbles([1, 3, 5, 1], 5))
            .toThrowError("Not enough data");
    });
})
