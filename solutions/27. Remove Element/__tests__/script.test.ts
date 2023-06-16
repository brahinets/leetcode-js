import {removeElement} from '../script'

describe('27. Remove Element', (): void => {
    it('Several', (): void => {
        const input: number[] = [3, 2, 2, 3];
        const left: number = removeElement(input, 2);

        expect(left).toBe(2);
        expect(input).toStrictEqual([3, 3]);
    });

    it('Many', (): void => {
        const input: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
        const left: number = removeElement(input, 2);

        expect(left).toBe(5);
        expect(input).toStrictEqual([0, 1, 3, 0, 4]);
    });
})
