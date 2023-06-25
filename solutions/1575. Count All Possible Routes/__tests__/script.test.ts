import {countRoutes} from '../script'

describe('1575. Count All Possible Routes', (): void => {
    it('Routes use all fuel', (): void => {
        expect(countRoutes([2, 3, 6, 8, 4], 1, 3, 5))
            .toBe(4);
    });

    it('Routes use some fuel', (): void => {
        expect(countRoutes([4, 3, 1], 1, 0, 6))
            .toBe(5);
    });

    it('Routes use some big fuel', (): void => {
        expect(countRoutes([1, 2, 3], 0, 2, 40))
            .toBe(615088286);
    });

    it('Not enough fuel to any route', (): void => {
        expect(countRoutes([5, 2, 1], 0, 2, 3))
            .toBe(0);
    });
})
