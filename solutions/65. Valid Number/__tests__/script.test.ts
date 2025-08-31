import {isNumber} from '../script'

describe('65. Valid Number', (): void => {
    it('Yes', (): void => {
        expect(isNumber("0"))
            .toBe(true)
    })

    it('No. Letter', (): void => {
        expect(isNumber("e"))
            .toBe(false)
    })

    it('No. Other char', (): void => {
        expect(isNumber("."))
            .toBe(false)
    })
})
