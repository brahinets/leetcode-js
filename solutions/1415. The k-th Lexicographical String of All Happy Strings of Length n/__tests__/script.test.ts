import {getHappyString} from '../script'

describe('1415. The k-th Lexicographical String of All Happy Strings of Length n', (): void => {
    it('Simple strings. Enough strings', (): void => {
        expect(getHappyString(1, 3))
            .toBe("c")
    })

    it('Simple strings. Very few strings', (): void => {
        expect(getHappyString(1, 4))
            .toBe("")
    })

    it('Three', (): void => {
        expect(getHappyString(3, 9))
            .toBe("cab")
    })
})
