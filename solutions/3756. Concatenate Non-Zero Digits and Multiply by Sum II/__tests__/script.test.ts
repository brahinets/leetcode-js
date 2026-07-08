import { sumAndMultiply } from '../script'

describe('3756. Concatenate Non-Zero Digits and Multiply by Sum II', (): void => {
    it('multiple overlapping queries over the same string', (): void => {
        const s: string = '10203004'
        const queries: number[][] = [
            [0, 7],
            [1, 3],
            [4, 6]
        ]

        const answer: number[] = sumAndMultiply(s, queries)

        expect(answer).toEqual([12340, 4, 9])
    })

    it('single non-zero digit surrounded by zeros versus an isolated zero', (): void => {
        const s: string = '1000'
        const queries: number[][] = [
            [0, 3],
            [1, 1]
        ]

        const answer: number[] = sumAndMultiply(s, queries)

        expect(answer).toEqual([1, 0])
    })

    it('result large enough to require modulo reduction', (): void => {
        const s: string = '9876543210'
        const queries: number[][] = [[0, 9]]

        const answer: number[] = sumAndMultiply(s, queries)

        expect(answer).toEqual([444444137])
    })

    it('range containing only zero digits', (): void => {
        const s: string = '00000'
        const queries: number[][] = [[0, 4]]

        const answer: number[] = sumAndMultiply(s, queries)

        expect(answer).toEqual([0])
    })

    it('minimal string with a single character query', (): void => {
        const s: string = '5'
        const queries: number[][] = [[0, 0]]

        const answer: number[] = sumAndMultiply(s, queries)

        expect(answer).toEqual([25])
    })

    it('query starting after the beginning of the string ignores earlier prefix digits', (): void => {
        const s: string = '9120'
        const queries: number[][] = [[2, 3]]

        const answer: number[] = sumAndMultiply(s, queries)

        expect(answer).toEqual([4])
    })
})
