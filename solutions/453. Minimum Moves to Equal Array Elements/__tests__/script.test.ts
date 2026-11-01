import {minMoves} from "../script"

describe('453. Minimum Moves to Equal Array Elements', (): void => {
    it('makes all elements equal by raising them to the maximum', (): void => {
        const numbers: number[] = [1, 2, 3]

        const result: number = minMoves(numbers)

        expect(result)
            .toBe(3)
    })

    it('requires no moves when elements are already equal', (): void => {
        const numbers: number[] = [1, 1, 1]

        const result: number = minMoves(numbers)

        expect(result)
            .toBe(0)
    })

    it('handles a single element array', (): void => {
        const numbers: number[] = [5]

        const result: number = minMoves(numbers)

        expect(result)
            .toBe(0)
    })

    it('handles negative values in the array', (): void => {
        const numbers: number[] = [-1, 0, 2]

        const result: number = minMoves(numbers)

        expect(result)
            .toBe(4)
    })

    it('requires moves proportional to the range with many duplicates', (): void => {
        const numbers: number[] = [1, 1, 1, 1000000000]

        const result: number = minMoves(numbers)

        expect(result)
            .toBe(999999999)
    })
})
