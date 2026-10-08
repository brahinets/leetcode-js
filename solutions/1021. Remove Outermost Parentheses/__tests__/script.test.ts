import { removeOuterParentheses } from '../script'

describe('1021. Remove Outermost Parentheses', (): void => {
    it('multiple primitives with nesting', (): void => {
        const s: string = '(()())(())'

        const result: string = removeOuterParentheses(s)

        expect(result)
            .toBe('()()()')
    })

    it('multiple primitives with deeper nesting', (): void => {
        const s: string = '(()())(())(()(()))'

        const result: string = removeOuterParentheses(s)

        expect(result)
            .toBe('()()()()(())')
    })

    it('primitives that contain nothing inside', (): void => {
        const s: string = '()()'

        const result: string = removeOuterParentheses(s)

        expect(result)
            .toBe('')
    })

    it('single primitive with one nested pair', (): void => {
        const s: string = '(())'

        const result: string = removeOuterParentheses(s)

        expect(result)
            .toBe('()')
    })

    it('single primitive with deep nesting', (): void => {
        const s: string = '((()))'

        const result: string = removeOuterParentheses(s)

        expect(result)
            .toBe('(())')
    })

    it('single primitive holding concatenated pairs', (): void => {
        const s: string = '(()()())'

        const result: string = removeOuterParentheses(s)

        expect(result)
            .toBe('()()()')
    })

    it('minimum length allowed by the constraints', (): void => {
        const s: string = '()'

        const result: string = removeOuterParentheses(s)

        expect(result)
            .toBe('')
    })
})
