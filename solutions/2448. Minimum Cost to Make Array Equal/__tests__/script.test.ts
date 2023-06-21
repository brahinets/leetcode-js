import {minCost} from '../script'

describe('2448. Minimum Cost to Make Array Equal', (): void => {
    it('Some cost, require balancing', (): void => {
        expect(minCost([1, 3, 5, 2], [2, 3, 1, 14]))
            .toBe(8);
    });

    it('Zero cost, data already equal', (): void => {
        expect(minCost([2, 2, 2, 2, 2], [4, 2, 8, 1, 3]))
            .toBe(0);
    });
})
