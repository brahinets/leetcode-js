import {climbStairs} from '../script'

describe('70. Climbing Stairs', (): void => {
    it('Two ways ', (): void => {
        expect(climbStairs(2)).toBe(2);
    });

    it('Three ways', (): void => {
        expect(climbStairs(3)).toBe(3);
    });
});
