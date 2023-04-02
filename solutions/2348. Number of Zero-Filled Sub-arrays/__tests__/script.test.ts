import {zeroFilledSubarray} from '../script'

describe('2348. Number of Zero-Filled Sub-arrays', (): void => {
    it('Has no sub-arrays', (): void => {
        expect(zeroFilledSubarray([2, 10, 2019]))
            .toBe(0);
    });

    it('Has single and doubled sub arrays', (): void => {
        expect(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]))
            .toBe(6);
    });


    it('Has single, doubled and tripled sub arrays', (): void => {
        expect(zeroFilledSubarray([0, 0, 0, 2, 0, 0]))
            .toBe(9);
    });
})