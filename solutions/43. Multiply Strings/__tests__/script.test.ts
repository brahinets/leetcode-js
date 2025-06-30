import {multiply} from '../script'

describe('43. Multiply Strings', (): void => {
    it('Smallest number', (): void => {
        expect(multiply("2", "3"))
            .toBe("6")
    })

    it('Big number', (): void => {
        expect(multiply("123", "456"))
            .toBe("56088")
    })

    it('Zero', (): void => {
        expect(multiply("1", "0"))
            .toBe("0")
    })
})
