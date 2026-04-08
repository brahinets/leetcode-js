import { xorAfterQueries } from '../script'

describe('3653. XOR After Range Multiplication Queries I', (): void => {
    it('multiplies every element in range with step 1', (): void => {
        expect(xorAfterQueries([1, 1, 1], [[0, 2, 1, 4]]))
            .toBe(4)
    })

    it('applies multiple queries sequentially', (): void => {
        expect(xorAfterQueries([2, 3, 4], [[0, 2, 1, 2]]))
            .toBe(10)
    })

    it('applies step greater than 1', (): void => {
        expect(xorAfterQueries([1, 2, 3, 4, 5], [[0, 4, 2, 3]]))
            .toBe(3)
    })

    it('applies modulo 10^9+7 correctly', (): void => {
        const modded: number = (1_000_000_000 * 100_000) % 1_000_000_007
        expect(xorAfterQueries([1_000_000_000], [[0, 0, 1, 100_000]]))
            .toBe(modded)
    })

    it('handles two queries on overlapping ranges', (): void => {
        expect(xorAfterQueries([1, 1, 1, 1], [[0, 3, 1, 2], [1, 2, 1, 3]]))
            .toBe(0)
    })

    it('leaves elements outside range unchanged', (): void => {
        expect(xorAfterQueries([5, 5, 5], [[1, 1, 1, 4]]))
            .toBe(20)
    })

    it('handles single element array', (): void => {
        expect(xorAfterQueries([7], [[0, 0, 1, 3]]))
            .toBe(21)
    })

    it('handles query that covers no indices due to step', (): void => {
        expect(xorAfterQueries([1, 2, 3], [[0, 1, 3, 5]]))
            .toBe(4)
    })
})
