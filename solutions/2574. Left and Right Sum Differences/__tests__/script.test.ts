import {leftRightDifference} from '../script'

describe('2574. Left and Right Sum Differences', (): void => {
    it('multiple elements with varied sums on each side', (): void => {
        const numbers: number[] = [10, 4, 8, 3]

        const result: number[] = leftRightDifference(numbers)

        expect(result).toEqual([15, 1, 11, 22])
    })

    it('single element has no left or right neighbors', (): void => {
        const numbers: number[] = [1]

        const result: number[] = leftRightDifference(numbers)

        expect(result).toEqual([0])
    })

    it('two elements where each side has one neighbor', (): void => {
        const numbers: number[] = [3, 7]

        const result: number[] = leftRightDifference(numbers)

        expect(result).toEqual([7, 3])
    })

    it('all elements equal produces symmetric differences', (): void => {
        const numbers: number[] = [5, 5, 5]

        const result: number[] = leftRightDifference(numbers)

        expect(result).toEqual([10, 0, 10])
    })

    it('ascending sequence accumulates left sum progressively', (): void => {
        const numbers: number[] = [1, 2, 3, 4, 5]

        const result: number[] = leftRightDifference(numbers)

        expect(result).toEqual([14, 11, 6, 1, 10])
    })
})
