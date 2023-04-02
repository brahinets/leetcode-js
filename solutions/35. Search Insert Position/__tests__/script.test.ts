import {searchInsert} from '../script'

describe('35. Search Insert Position', (): void => {
    it('Existing entry', (): void => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    });

    it('Insert in the beginning', (): void => {
        expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
    });

    it('Insert in the middle', (): void => {
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    });

    it('Insert in the end', (): void => {
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    });
});