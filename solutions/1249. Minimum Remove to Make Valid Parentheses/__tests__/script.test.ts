import {minRemoveToMakeValid} from '../script'

describe('1249. Minimum Remove to Make Valid Parentheses', (): void => {

    it('Remove nothing', (): void => {
        expect(minRemoveToMakeValid("(a)"))
            .toBe("(a)")
    })

    it('Remove on the start', (): void => {
        expect(minRemoveToMakeValid("a)b(c)d"))
            .toBe("ab(c)d")
    })

    it('Remove in the end', (): void => {
        expect(minRemoveToMakeValid("lee(t(c)o)de)"))
            .toBe("lee(t(c)o)de")
    })

    it('Remove all', (): void => {
        expect(minRemoveToMakeValid("))(("))
            .toBe("")
    })
})
