import {closeStrings} from '../script'

describe('1657. Determine if Two Strings Are Close', (): void => {

    it('Anagrams are close', (): void => {
        expect(closeStrings("abc", "bca"))
            .toBe(true)
    })

    it('Close if change some letters', (): void => {
        expect(closeStrings("cabbba", "abbccc"))
            .toBe(true)
    })

    it('Not closed due to different length', (): void => {
        expect(closeStrings("a", "aa"))
            .toBe(false)
    })
})
