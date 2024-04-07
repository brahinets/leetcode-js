import {checkValidString} from '../script'

describe('678. Valid Parenthesis String', (): void => {
    it('Valid exactly', (): void => {
        expect(checkValidString("()"))
            .toBe(true)
    })

    it('Valid with meaningless asterisk', (): void => {
        expect(checkValidString("(*)"))
            .toBe(true)
    })

    it('Valid with meaningful asterisk', (): void => {
        expect(checkValidString("(*))"))
            .toBe(true)
    })

    it('Invalid with lack of left parenthesis', (): void => {
        expect(checkValidString("())"))
            .toBe(false)
    })

    it('Invalid with lack of right parenthesis', (): void => {
        expect(checkValidString("(()"))
            .toBe(false)
    })
})
