import { minInsertions } from '../script'

describe('1541. Minimum Insertions to Balance a Parentheses String', (): void => {
    it('one closing parenthesis is missing from the last group', (): void => {
        const s: string = '(()))'

        const result: number = minInsertions(s)

        expect(result)
            .toBe(1)
    })

    it('already balanced string', (): void => {
        const s: string = '())'

        const result: number = minInsertions(s)

        expect(result)
            .toBe(0)
    })

    it('closing parentheses before opening and unmatched opening at the end', (): void => {
        const s: string = '))())('

        const result: number = minInsertions(s)

        expect(result)
            .toBe(3)
    })

    it('only opening parentheses', (): void => {
        const s: string = '(((((('

        const result: number = minInsertions(s)

        expect(result)
            .toBe(12)
    })

    it('only closing parentheses', (): void => {
        const s: string = ')))))))'

        const result: number = minInsertions(s)

        expect(result)
            .toBe(5)
    })

    it('single opening parenthesis', (): void => {
        const s: string = '('

        const result: number = minInsertions(s)

        expect(result)
            .toBe(2)
    })

    it('single closing parenthesis', (): void => {
        const s: string = ')'

        const result: number = minInsertions(s)

        expect(result)
            .toBe(2)
    })

    it('opening parenthesis followed by a single closing parenthesis', (): void => {
        const s: string = '()'

        const result: number = minInsertions(s)

        expect(result)
            .toBe(1)
    })

    it('opening parenthesis interrupts a lone closing parenthesis', (): void => {
        const s: string = '()('

        const result: number = minInsertions(s)

        expect(result)
            .toBe(3)
    })

    it('nested opening parentheses share the closing pairs', (): void => {
        const s: string = '(())())'

        const result: number = minInsertions(s)

        expect(result)
            .toBe(2)
    })
})
