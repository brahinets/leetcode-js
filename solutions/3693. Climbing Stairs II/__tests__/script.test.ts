import { climbStairs } from '../script'

describe('3693. Climbing Stairs II', (): void => {
    it('mixes single and double jumps when they are cheapest', (): void => {
        const result: number = climbStairs(4, [1, 2, 3, 4])

        expect(result).toBe(13)
    })

    it('skips expensive intermediate steps with longer jumps', (): void => {
        const result: number = climbStairs(4, [5, 1, 6, 2])

        expect(result).toBe(11)
    })

    it('takes a single triple jump when it beats smaller hops', (): void => {
        const result: number = climbStairs(3, [9, 8, 3])

        expect(result).toBe(12)
    })

    it('pays the only possible jump for a single step', (): void => {
        const result: number = climbStairs(1, [7])

        expect(result).toBe(8)
    })

    it('uses a double jump to avoid an expensive first step', (): void => {
        const result: number = climbStairs(2, [3, 1])

        expect(result).toBe(5)
    })

    it('chains single jumps to avoid the square penalty of long ones', (): void => {
        const result: number = climbStairs(6, [1, 1, 1, 1, 1, 1])

        expect(result).toBe(12)
    })
})
