import {canBeValid} from '../script'

describe('2116. Check if a Parentheses String Can Be Valid', (): void => {
    it('Change some required', (): void => {
        expect(canBeValid("))()))", "010100"))
            .toBe(true)
    })

    it('Change many required', (): void => {
        expect(canBeValid("())()))()(()(((())(()()))))((((()())(())", "1011101100010001001011000000110010100101"))
            .toBe(true)
    })

    it('Do not need any changes', (): void => {
        expect(canBeValid("()()", "0000"))
            .toBe(true)
    })

    it('Impossible', (): void => {
        expect(canBeValid(")", "0"))
            .toBe(false)
    })
})
