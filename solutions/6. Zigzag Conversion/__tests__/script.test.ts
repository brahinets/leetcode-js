import {convert} from '../script'

describe('6. Zigzag Conversion', (): void => {

    it('Single step', (): void => {
        expect(convert("A", 1))
            .toBe("A")
    })

    it('Short Zig Zag', (): void => {
        expect(convert("PAYPALISHIRING", 3))
            .toBe("PAHNAPLSIIGYIR")
    })

    it('Long Zig Zag', (): void => {
        expect(convert("PAYPALISHIRING", 4))
            .toBe("PINALSIGYAHRPI")
    })
})
