import { smallestIndex } from '../script'

describe('3550. Smallest Index With Digit Sum Equal to Index', (): void => {
    it('single digit value matching its own index', (): void => {
        const numbers: number[] = [1, 3, 2]

        const result: number = smallestIndex(numbers)

        expect(result)
            .toBe(2)
    })

    it('earliest match wins when several indices qualify', (): void => {
        const numbers: number[] = [1, 10, 11]

        const result: number = smallestIndex(numbers)

        expect(result)
            .toBe(1)
    })

    it('no index satisfies the condition', (): void => {
        const numbers: number[] = [1, 2, 3]

        const result: number = smallestIndex(numbers)

        expect(result)
            .toBe(-1)
    })

    it('zero at the first index has a digit sum of zero', (): void => {
        const numbers: number[] = [0]

        const result: number = smallestIndex(numbers)

        expect(result)
            .toBe(0)
    })

    it('single element that does not match', (): void => {
        const numbers: number[] = [5]

        const result: number = smallestIndex(numbers)

        expect(result)
            .toBe(-1)
    })

    it('multi digit value carrying the match', (): void => {
        const numbers: number[] = [7, 7, 7, 7, 22]

        const result: number = smallestIndex(numbers)

        expect(result)
            .toBe(4)
    })

    it('upper bound value whose digits sum to one', (): void => {
        const numbers: number[] = [9, 1000]

        const result: number = smallestIndex(numbers)

        expect(result)
            .toBe(1)
    })

    it('largest reachable digit sum at its matching index', (): void => {
        const numbers: number[] = Array.from({ length: 28 }, (): number => 0)
        numbers[27] = 999

        const result: number = smallestIndex(numbers)

        expect(result)
            .toBe(0)
    })

    it('match found only at the last index of a long array', (): void => {
        const numbers: number[] = Array.from({ length: 100 }, (): number => 1000)
        numbers[0] = 5
        numbers[99] = 7

        const result: number = smallestIndex(numbers)

        expect(result)
            .toBe(1)
    })
})
