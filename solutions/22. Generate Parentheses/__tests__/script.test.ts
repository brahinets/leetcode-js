import {generateParenthesis} from '../script'

describe('22. Generate Parentheses', (): void => {
    it('Multiple combinations', (): void => {
        const actual: string[] = generateParenthesis(3)

        expect(actual.length).toBe(5)
        expect(actual).toContain("((()))")
        expect(actual).toContain("(()())")
        expect(actual).toContain("(())()")
        expect(actual).toContain("()(())")
        expect(actual).toContain("()()()")
    })


    it('Single combination', (): void => {
        const actual: string[] = generateParenthesis(1)

        expect(actual.length).toBe(1)
        expect(actual).toContain("()")
    })

    it('Zero combinations', (): void => {
        const actual: string[] = generateParenthesis(0)

        expect(actual.length).toBe(0)
    })
})
