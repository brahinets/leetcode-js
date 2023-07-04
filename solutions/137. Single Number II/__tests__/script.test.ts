import {singleNumber} from '../script'

describe('137. Single Number II', (): void => {

    it('Element not found', (): void => {
        expect(() => singleNumber([]))
            .toThrowError("Element not found");
    });

    it('Has none three times', (): void => {
        expect(singleNumber([1]))
            .toBe(1);
    });

    it('Has one three times', (): void => {
        expect(singleNumber([2, 2, 3, 2]))
            .toBe(3);
    });

    it('Has several three times', (): void => {
        expect(singleNumber([0, 1, 0, 1, 0, 1, 99]))
            .toBe(99);
    });
})
