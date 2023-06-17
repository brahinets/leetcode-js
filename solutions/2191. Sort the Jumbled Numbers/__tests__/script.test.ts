import {sortJumbled} from '../script'

describe('2191. Sort the Jumbled Numbers', (): void => {
    it('Has same mapping', (): void => {
        expect(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]))
            .toStrictEqual([338, 38, 991]);
    });

    it('All different mappings', (): void => {
        expect(sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123]))
            .toStrictEqual([123, 456, 789]);
    });
})
