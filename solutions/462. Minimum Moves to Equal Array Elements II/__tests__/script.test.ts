import {minMoves2} from "../script"

describe('462. Minimum Moves to Equal Array Elements II', (): void => {
    it('aligns all elements on the middle value with two moves', (): void => {
        const numbers: number[] = [1, 2, 3]

        const result: number = minMoves2(numbers)

        expect(result)
            .toBe(2)
    })

    it('aligns elements on a value between the middle pair for even length', (): void => {
        const numbers: number[] = [1, 10, 2, 9]

        const result: number = minMoves2(numbers)

        expect(result)
            .toBe(16)
    })

    it('requires no moves when elements are already equal', (): void => {
        const numbers: number[] = [7, 7, 7]

        const result: number = minMoves2(numbers)

        expect(result)
            .toBe(0)
    })

    it('handles a single element array', (): void => {
        const numbers: number[] = [-5]

        const result: number = minMoves2(numbers)

        expect(result)
            .toBe(0)
    })

    it('handles negative values in the array', (): void => {
        const numbers: number[] = [-1000000000, 1000000000]

        const result: number = minMoves2(numbers)

        expect(result)
            .toBe(2000000000)
    })

    it('aligns toward a value other than the extremes when outliers are present', (): void => {
        const numbers: number[] = [1, 0, 0, 8, 6]

        const result: number = minMoves2(numbers)

        expect(result)
            .toBe(14)
    })
})
