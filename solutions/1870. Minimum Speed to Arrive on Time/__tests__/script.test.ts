import {minSpeedOnTime} from '../script'

describe('1870. Minimum Speed to Arrive on Time', (): void => {
    it('Arrives, integer time', (): void => {
        expect(minSpeedOnTime([1, 3, 2], 6))
            .toBe(1);
    });

    it('Arrives, non-integer time', (): void => {
        expect(minSpeedOnTime([1, 3, 2], 2.7))
            .toBe(3);
    });

    it('Cannot arrive', (): void => {
        expect(minSpeedOnTime([1, 3, 2], 1.9))
            .toBe(-1);
    });
})
