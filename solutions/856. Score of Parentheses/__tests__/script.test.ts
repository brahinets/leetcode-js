import { scoreOfParentheses } from '../script'

describe('856. Score of Parentheses', (): void => {
    it('single pair of parentheses', (): void => {
        const s: string = '()'

        const result: number = scoreOfParentheses(s)

        expect(result)
            .toBe(1)
    })

    it('one pair nested inside another', (): void => {
        const s: string = '(())'

        const result: number = scoreOfParentheses(s)

        expect(result)
            .toBe(2)
    })

    it('two pairs concatenated side by side', (): void => {
        const s: string = '()()'

        const result: number = scoreOfParentheses(s)

        expect(result)
            .toBe(2)
    })

    it('mix of nesting and concatenation', (): void => {
        const s: string = '(()(()))'

        const result: number = scoreOfParentheses(s)

        expect(result)
            .toBe(6)
    })

    it('concatenation inside a wrapping pair', (): void => {
        const s: string = '(()())'

        const result: number = scoreOfParentheses(s)

        expect(result)
            .toBe(4)
    })

    it('three pairs concatenated side by side', (): void => {
        const s: string = '()()()'

        const result: number = scoreOfParentheses(s)

        expect(result)
            .toBe(3)
    })

    it('deep nesting multiplies the score at each level', (): void => {
        const s: string = '((()))'

        const result: number = scoreOfParentheses(s)

        expect(result)
            .toBe(4)
    })

    it('maximum length allowed by the constraints', (): void => {
        const s: string = `(${'()'.repeat(24)})`

        const result: number = scoreOfParentheses(s)

        expect(result)
            .toBe(48)
    })
})
