import {largestAltitude} from '../script'

describe('1732. Find the Highest Altitude', (): void => {
    it('High', (): void => {
        expect(largestAltitude([-5, 1, 5, 0, -7]))
            .toBe(1);
    });

    it('Zero', (): void => {
        expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2]))
            .toBe(0);
    });

    it('Low', (): void => {
        expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2]))
            .toBe(0);
    });

    it('Expect enough data', (): void => {
        expect(() => largestAltitude([]))
            .toThrowError("Not enough data");
    });
})
