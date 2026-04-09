import { xorAfterQueries } from '../script'

describe('3655. XOR After Range Multiplication Queries II', (): void => {
    it('multiplies all elements by the same value', (): void => {
        expect(xorAfterQueries([1, 1, 1], [[0, 2, 1, 4]]))
            .toBe(4)
    })

    it('applies multiple queries sequentially on overlapping ranges', (): void => {
        expect(xorAfterQueries([2, 3, 1, 5, 4], [[1, 4, 2, 3], [0, 2, 1, 2]]))
            .toBe(31)
    })

    it('handles step larger than array length', (): void => {
        expect(xorAfterQueries([1, 2, 3, 4, 5], [[0, 4, 10, 7]]))
            .toBe(7 ^ 2 ^ 3 ^ 4 ^ 5)
    })

    it('handles single element array', (): void => {
        expect(xorAfterQueries([7], [[0, 0, 1, 3]]))
            .toBe(21)
    })

    it('leaves elements outside range unchanged', (): void => {
        expect(xorAfterQueries([5, 5, 5], [[1, 1, 1, 4]]))
            .toBe(20)
    })

    it('applies modulo 10^9+7 correctly', (): void => {
        const modulus: number = 1_000_000_007
        const expected: number = (1_000_000_000 * 100_000) % modulus
        expect(xorAfterQueries([1_000_000_000], [[0, 0, 1, 100_000]]))
            .toBe(expected)
    })

    it('handles step equal to 1 touching all elements', (): void => {
        expect(xorAfterQueries([2, 3, 4], [[0, 2, 1, 2]]))
            .toBe(10)
    })

    it('applies step-2 query affecting only even-index elements', (): void => {
        expect(xorAfterQueries([1, 2, 3, 4, 5], [[0, 4, 2, 3]]))
            .toBe(3)
    })

    it('handles two queries compounding on the same element', (): void => {
        expect(xorAfterQueries([1], [[0, 0, 1, 2], [0, 0, 1, 3]]))
            .toBe(6)
    })
})
