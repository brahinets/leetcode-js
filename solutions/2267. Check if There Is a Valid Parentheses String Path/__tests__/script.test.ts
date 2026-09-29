import { hasValidPath } from '../script'

describe('2267. Check if There Is a Valid Parentheses String Path', (): void => {
    it('two distinct valid paths available', (): void => {
        const grid: string[][] = [
            ['(', '(', '('],
            [')', '(', ')'],
            ['(', '(', ')'],
            ['(', '(', ')'],
        ]

        const result: boolean = hasValidPath(grid)

        expect(result)
            .toBe(true)
    })

    it('every path forms an invalid string', (): void => {
        const grid: string[][] = [
            [')', ')'],
            ['(', '('],
        ]

        const result: boolean = hasValidPath(grid)

        expect(result)
            .toBe(false)
    })

    it('single cell can never form a non-empty even length string', (): void => {
        const grid: string[][] = [['(']]

        const result: boolean = hasValidPath(grid)

        expect(result)
            .toBe(false)
    })

    it('path length is odd regardless of content', (): void => {
        const grid: string[][] = [
            ['(', '('],
            ['(', ')'],
        ]

        const result: boolean = hasValidPath(grid)

        expect(result)
            .toBe(false)
    })

    it('starting cell closes immediately', (): void => {
        const grid: string[][] = [
            [')', '('],
            ['(', ')'],
            ['(', ')'],
        ]

        const result: boolean = hasValidPath(grid)

        expect(result)
            .toBe(false)
    })

    it('ending cell opens immediately', (): void => {
        const grid: string[][] = [
            ['(', '('],
            [')', ')'],
            [')', '('],
        ]

        const result: boolean = hasValidPath(grid)

        expect(result)
            .toBe(false)
    })

    it('single row forms a nested valid pattern', (): void => {
        const grid: string[][] = [['(', '(', ')', ')']]

        const result: boolean = hasValidPath(grid)

        expect(result)
            .toBe(true)
    })

    it('single column forms a nested valid pattern', (): void => {
        const grid: string[][] = [['('], ['('], [')'], [')']]

        const result: boolean = hasValidPath(grid)

        expect(result)
            .toBe(true)
    })

    it('single column forms a concatenation of two valid pairs', (): void => {
        const grid: string[][] = [['('], [')'], ['('], [')']]

        const result: boolean = hasValidPath(grid)

        expect(result)
            .toBe(true)
    })

    it('larger grid with a balanced path hidden among unbalanced routes', (): void => {
        const grid: string[][] = [
            ['(', '(', '('],
            [')', ')', ')'],
            ['(', '(', ')'],
            ['(', ')', ')'],
        ]

        const result: boolean = hasValidPath(grid)

        expect(result)
            .toBe(true)
    })
})
