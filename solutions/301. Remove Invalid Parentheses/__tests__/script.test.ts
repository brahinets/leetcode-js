import { removeInvalidParentheses } from '../script'

describe('301. Remove Invalid Parentheses', (): void => {
    it('one removal produces multiple distinct valid strings', (): void => {
        const s: string = '()())()'

        const result: string[] = removeInvalidParentheses(s)

        expect(result.sort())
            .toEqual(['(())()', '()()()'])
    })

    it('letters mixed with parentheses and multiple solutions', (): void => {
        const s: string = '(a)())()'

        const result: string[] = removeInvalidParentheses(s)

        expect(result.sort())
            .toEqual(['(a())()', '(a)()()'])
    })

    it('only a closing parenthesis must be removed leaving empty string', (): void => {
        const s: string = ')('

        const result: string[] = removeInvalidParentheses(s)

        expect(result)
            .toEqual([''])
    })

    it('already valid string stays unchanged', (): void => {
        const s: string = '(a)b(c)'

        const result: string[] = removeInvalidParentheses(s)

        expect(result)
            .toEqual(['(a)b(c)'])
    })

    it('string without parentheses', (): void => {
        const s: string = 'abc'

        const result: string[] = removeInvalidParentheses(s)

        expect(result)
            .toEqual(['abc'])
    })

    it('single letter', (): void => {
        const s: string = 'x'

        const result: string[] = removeInvalidParentheses(s)

        expect(result)
            .toEqual(['x'])
    })

    it('only opening parentheses', (): void => {
        const s: string = '((('

        const result: string[] = removeInvalidParentheses(s)

        expect(result)
            .toEqual([''])
    })

    it('only closing parentheses', (): void => {
        const s: string = ')))'

        const result: string[] = removeInvalidParentheses(s)

        expect(result)
            .toEqual([''])
    })

    it('extra opening parenthesis in front of a valid pair', (): void => {
        const s: string = '(()'

        const result: string[] = removeInvalidParentheses(s)

        expect(result)
            .toEqual(['()'])
    })

    it('duplicate results are not repeated', (): void => {
        const s: string = '(((k()(('

        const result: string[] = removeInvalidParentheses(s)

        expect(result.sort())
            .toEqual(['(k)', 'k()'])
    })

    it('removal of both kinds of parentheses is required', (): void => {
        const s: string = ')(f'

        const result: string[] = removeInvalidParentheses(s)

        expect(result)
            .toEqual(['f'])
    })
})
