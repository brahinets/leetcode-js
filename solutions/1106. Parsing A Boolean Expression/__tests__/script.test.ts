import {parseBoolExpr} from '../script'

describe('1106. Parsing A Boolean Expression', (): void => {
    it('One', (): void => {
        expect(parseBoolExpr("&(|(f))"))
            .toBe(false)
    })

    it('Two', (): void => {
        expect(parseBoolExpr("|(f,f,f,t)"))
            .toBe(true)
    })

    it('Three', (): void => {
        expect(parseBoolExpr("!(&(f,t))"))
            .toBe(true)
    })
})
