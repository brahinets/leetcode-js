import {successfulPairs} from '../script'

describe('2300. Successful Pairs of Spells and Potions', (): void => {
    it('Several successes', (): void => {
        expect(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7))
            .toStrictEqual([4, 0, 3]);
    });
    it('Many successes', (): void => {
        expect(successfulPairs([3, 1, 2], [8, 5, 8], 16))
            .toStrictEqual([2, 0, 2]);
    });
})