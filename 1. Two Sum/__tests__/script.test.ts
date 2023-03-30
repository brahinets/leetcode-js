import {twoSum} from '../script'

describe('1. Two Sum', (): void => {
    it('One', (): void => {
        expect(twoSum([2, 7, 11, 15], 9))
            .toStrictEqual([0, 1]);
    });

    it('Two', (): void => {
        expect(twoSum([3, 2, 4], 6))
            .toStrictEqual([1, 2]);
    });

    it('Three', (): void => {
        expect(twoSum([3, 3], 6))
            .toStrictEqual([0, 1]);
    });
})
