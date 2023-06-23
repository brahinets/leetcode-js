import {removeDuplicates} from '../script'

describe('26. Remove Duplicates from Sorted Array', (): void => {

    it('Remove one', (): void => {
        const input: number[] = [1, 1, 2];
        const left: number = removeDuplicates(input);

        expect(left).toBe(2);
        expect(input).toStrictEqual([1, 2]);
    });

    it('Remove several', (): void => {
        const input: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const left: number = removeDuplicates(input);

        expect(left).toBe(5);
        expect(input).toStrictEqual([0, 1, 2, 3, 4]);
    });

})
