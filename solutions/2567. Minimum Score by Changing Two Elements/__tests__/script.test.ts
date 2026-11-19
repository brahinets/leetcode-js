import { minimizeSum } from '../script'

describe('2567. Minimum Score by Changing Two Elements', (): void => {
    it('shrinks the range by changing the two outer elements of the first example', (): void => {
        const numbers: number[] = [1, 4, 7, 8, 5]

        const result: number = minimizeSum(numbers)

        expect(result).toBe(3)
    })

    it('reaches a zero score when every element can be made equal', (): void => {
        const numbers: number[] = [1, 4, 3]

        const result: number = minimizeSum(numbers)

        expect(result).toBe(0)
    })

    it('already yields a zero score for an array of equal elements', (): void => {
        const numbers: number[] = [5, 5, 5, 5]

        const result: number = minimizeSum(numbers)

        expect(result).toBe(0)
    })

    it('handles the smallest allowed array length', (): void => {
        const numbers: number[] = [1000000000, 1, 500000000]

        const result: number = minimizeSum(numbers)

        expect(result).toBe(0)
    })

    it('removes one element from each end when that gives the narrowest range', (): void => {
        const numbers: number[] = [1, 100, 101, 102, 200]

        const result: number = minimizeSum(numbers)

        expect(result).toBe(2)
    })
})
