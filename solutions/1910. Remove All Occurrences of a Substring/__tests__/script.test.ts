import {removeOccurrences} from '../script'

describe('1910. Remove All Occurrences of a Substring', (): void => {
    it('Remove in different places', (): void => {
        expect(removeOccurrences("daabcbaabcbc", "abc"))
            .toBe("dab")
    })

    it('Remove middle multiple times', (): void => {
        expect(removeOccurrences("axxxxyyyyb", "xy"))
            .toBe("ab")
    })

    it('Remove nothing', (): void => {
        expect(removeOccurrences("abc", "cd"))
            .toBe("abc")
    })
})
