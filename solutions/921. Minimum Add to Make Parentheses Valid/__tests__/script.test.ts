import {minAddToMakeValid} from '../script'

describe('921. Minimum Add to Make Parentheses Valid', (): void => {

    it('Nothing needed', (): void => {
        expect(minAddToMakeValid("()"))
            .toBe(0)
    })

    it('Add one', (): void => {
        expect(minAddToMakeValid("())"))
            .toBe(1)
    })

    it('Add for all', (): void => {
        expect(minAddToMakeValid("((("))
            .toBe(3)
    })
})
