import {longestValidParentheses} from '../script'

describe('32. Longest Valid Parentheses', (): void => {
    it('One parentheses', (): void => {
        expect(longestValidParentheses("(()"))
            .toBe(2)
    })

    it('Multiple parentheses', (): void => {
        expect(longestValidParentheses(")()())"))
            .toBe(4)
    })

    it('No parentheses', (): void => {
        expect(longestValidParentheses(""))
            .toBe(0)
    })
})
