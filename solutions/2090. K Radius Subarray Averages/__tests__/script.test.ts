import {getAverages} from '../script'

describe('2090. K Radius Subarray Averages', (): void => {
    it('Has enough radius', (): void => {
        expect(getAverages([100000], 0))
            .toStrictEqual([100000]);
    });

    it('Has enough integer radius', (): void => {
        expect(getAverages([1, 2, 3, 4], 1))
            .toStrictEqual([-1, 2, 3, -1]);
    });

    it('Some do not have enough radius', (): void => {
        expect(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3))
            .toStrictEqual([-1, -1, -1, 5, 4, 4, -1, -1, -1]);
    });

    it('All do not have enough radius', (): void => {
        expect(getAverages([8], 100000))
            .toStrictEqual([-1]);
    });
})
