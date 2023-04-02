import {climbStairs} from '../script'

describe('70. Climbing Stairs', (): void => {
    it('Two ways ', (): void => {
        expect(climbStairs(2)).toBe(2);
    });

    it('Three ways', (): void => {
        expect(climbStairs(3)).toBe(3);
    });

    it('Many ways', (): void => {
        expect(climbStairs(45)).toBe(1836311903);
    });
});
