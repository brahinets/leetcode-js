import {kidsWithCandies} from '../script'

describe('1431. Kids With the Greatest Number of Candies', (): void => {
    it('Biggest not changed', (): void => {
        expect(kidsWithCandies([4, 2, 1, 1, 2], 1))
            .toStrictEqual([true, false, false, false, false]);
    });

    it('Several new biggest', (): void => {
        expect(kidsWithCandies([12, 1, 12], 10))
            .toStrictEqual([true, false, true]);
    });

    it('Many new biggest', (): void => {
        expect(kidsWithCandies([2, 3, 5, 1, 3], 3))
            .toStrictEqual([true, true, true, false, true]);
    });
})

