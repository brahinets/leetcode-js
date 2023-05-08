import {findKthPositive} from '../script'

describe('1539. Kth Missing Positive Number', (): void => {
    it('Missing in the beginning', (): void => {
        expect(findKthPositive([2, 3, 4, 7, 11], 1))
            .toBe(1);
    });

    it('Missing in the middle', (): void => {
        expect(findKthPositive([2, 3, 4, 7, 11], 5))
            .toBe(9);
    });

    it('Missing in the end', (): void => {
        expect(findKthPositive([1, 2, 3, 4], 2))
            .toBe(6);
    });
})