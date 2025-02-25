import {reverseParentheses} from '../script'

describe('1190. Reverse Substrings Between Each Pair of Parentheses', (): void => {

    it('The only reverse', (): void => {
        expect(reverseParentheses("(abcd)"))
            .toBe("dcba")
    })

    it('Only odd reverse', (): void => {
        expect(reverseParentheses("(u(love)i)"))
            .toBe("iloveu")
    })

    it('Multiple Odd reverse', (): void => {
        expect(reverseParentheses("(ed(et(oc))el)"))
            .toBe("leetcode")
    })
})
