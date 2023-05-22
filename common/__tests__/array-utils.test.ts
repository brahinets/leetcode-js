import {count} from '../array-utils'

describe('Counting', (): void => {
    it('Empty', (): void => {
        expect(count([]))
            .toStrictEqual(new Map<string, number>());
    });

    it('Count numbers', (): void => {
        expect(count([1, 2, 2, 3, 3, 3]))
            .toStrictEqual(new Map<number, number>([[1, 1], [2, 2], [3, 3]]));
    });

    it('Count strings', (): void => {
        expect(count(["a", "bb", "bb", "ccc", "ccc", "ccc"]))
            .toStrictEqual(new Map<string, number>([["a", 1], ["bb", 2], ["ccc", 3]]));
    });
})