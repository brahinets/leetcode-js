import {canPlaceFlowers} from '../script'

describe('605. Can Place Flowers', (): void => {
    it('Can place zero flower', (): void => {
        expect(canPlaceFlowers([1, 0, 1, 0, 1], 0)).toBe(true);
    });

    it('Can place one flower', (): void => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
    });

    it('Can place one flower', (): void => {
        expect(canPlaceFlowers([0], 1)).toBe(true);
    });

    it('Cannot place two flowers', (): void => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
    });
});

