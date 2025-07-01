import {possibleStringCount} from '../script'

describe('3330. Find the Original Typed String I', (): void => {
    it('No possible mistakes', (): void => {
        expect(possibleStringCount("abcd"))
            .toBe(1)
    })

    it('Part of word is a possible mistake', (): void => {
        expect(possibleStringCount("abbcccc"))
            .toBe(5)
    })

    it('Full word is a possible mistake', (): void => {
        expect(possibleStringCount("aaaa"))
            .toBe(4)
    })
})
