import { maxJumps } from '../script'

describe('1340. Jump Game V', (): void => {
    it('finds maximum visitable indices from best starting point', (): void => {
        const result: number = maxJumps([6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2)

        expect(result).toBe(4)
    })

    it('handles all equal elements where no jumps are possible', (): void => {
        const result: number = maxJumps([3, 3, 3, 3, 3], 3)

        expect(result).toBe(1)
    })

    it('visits all indices in strictly decreasing array with d equal to 1', (): void => {
        const result: number = maxJumps([7, 6, 5, 4, 3, 2, 1], 1)

        expect(result).toBe(7)
    })

    it('handles single element array', (): void => {
        const result: number = maxJumps([5], 1)

        expect(result).toBe(1)
    })

    it('chains backward jumps through monotonically increasing array', (): void => {
        const result: number = maxJumps([1, 2, 3, 4, 5], 2)

        expect(result).toBe(5)
    })

    it('handles large d spanning entire array', (): void => {
        const result: number = maxJumps([5, 1, 4, 2, 3], 4)

        expect(result).toBe(4)
    })

    it('stops jumping when blocked by taller element in between', (): void => {
        const result: number = maxJumps([1, 5, 1, 5, 1], 2)

        expect(result).toBe(2)
    })
})
