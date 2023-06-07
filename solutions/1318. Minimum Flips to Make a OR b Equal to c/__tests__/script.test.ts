import {minFlips} from '../script'

describe('1318. Minimum Flips to Make a OR b Equal to c', (): void => {
    it('Zero', (): void => {
        expect(minFlips(1, 2, 3))
            .toBe(0);
    });

    it('One', (): void => {
        expect(minFlips(4, 2, 7))
            .toBe(1);
    });

    it('Several', (): void => {
        expect(minFlips(2, 6, 5))
            .toBe(3);
    });
});
