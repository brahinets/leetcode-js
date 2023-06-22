import {maxProfit} from '../script'

describe('714. Best Time to Buy and Sell Stock with Transaction Fee', (): void => {
    it('Many transactions can be done', (): void => {
        expect(maxProfit([1, 3, 2, 8, 4, 9], 2))
            .toBe(8);
    });

    it('Few transactions can be done', (): void => {
        expect(maxProfit([1, 3, 7, 5, 10, 3], 3))
            .toBe(6);
    });
})
