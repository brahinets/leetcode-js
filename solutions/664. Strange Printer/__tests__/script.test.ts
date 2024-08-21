import {strangePrinter} from '../script'

describe('664. Strange Printer', (): void => {

    it('Append', (): void => {
        expect(strangePrinter("aaabbb"))
            .toBe(2)
    })

    it('Overwrite', (): void => {
        expect(strangePrinter("aba"))
            .toBe(2)
    })
})
