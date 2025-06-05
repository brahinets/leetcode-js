import {smallestEquivalentString} from '../script'

describe('1061. Lexicographically Smallest Equivalent String', (): void => {
    it('One', (): void => {
        expect(smallestEquivalentString("parker", "morris", "parser"))
            .toBe("makkek")
    })

    it('Two', (): void => {
        expect(smallestEquivalentString("hello", "world", "hold"))
            .toBe("hdld")
    })

    it('Three', (): void => {
        expect(smallestEquivalentString("leetcode", "programs", "sourcecode"))
            .toBe("aauaaaaada")
    })
})
