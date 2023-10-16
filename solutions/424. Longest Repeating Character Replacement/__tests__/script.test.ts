import {characterReplacement} from '../script'

describe('424. Longest Repeating Character Replacement', (): void => {

    it('One replacements', (): void => {
        expect(characterReplacement("AABABBA", 1))
            .toBe(4)
    })

    it('Two replacements', (): void => {
        expect(characterReplacement("ABAB", 2))
            .toBe(4)
    })
})
