import {removeKdigits} from '../script'

describe('402. Remove K Digits', (): void => {

    it('Remove middle', (): void => {
        expect(removeKdigits("1432219", 3))
            .toBe("1219")
    })

    it('Remove leading zeros', (): void => {
        expect(removeKdigits("10200", 1))
            .toBe("200")
    })

    it('Remove everything', (): void => {
        expect(removeKdigits("10", 2))
            .toBe("0")
    })

    it('Remove and more', (): void => {
        expect(removeKdigits("1", 2))
            .toBe("0")
    })
})
