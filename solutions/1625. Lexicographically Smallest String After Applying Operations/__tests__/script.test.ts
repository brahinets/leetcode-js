import {findLexSmallestString} from '../script'

describe('1625. Lexicographically Smallest String After Applying Operations', (): void => {
    it('There is no way to obtain such a string', (): void => {
        expect(findLexSmallestString("5525", 9, 2))
            .toBe("2050")
    })

    it('Some way', (): void => {
        expect(findLexSmallestString("74", 5, 1))
            .toBe("24")
    })

    it('There are no sequence of operations', (): void => {
        expect(findLexSmallestString("0011", 4, 2))
            .toBe("0011")
    })
})
