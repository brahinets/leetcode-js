import {numRescueBoats} from '../script'

describe('881. Boats to Save People', (): void => {
    it('All in one boat', (): void => {
        expect(numRescueBoats([1, 2], 3))
            .toBe(1);
    });

    it('By groups', (): void => {
        expect(numRescueBoats([3, 2, 2, 1], 3))
            .toBe(3);
    });

    it('By groups and limits people count', (): void => {
        expect(numRescueBoats([3, 2, 3, 2, 2], 6))
            .toBe(3);
    });

    it('All in separate boats', (): void => {
        expect(numRescueBoats([3, 5, 3, 4], 5))
            .toBe(4);
    });
});