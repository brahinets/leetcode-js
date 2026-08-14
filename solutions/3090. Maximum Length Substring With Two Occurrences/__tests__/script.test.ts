import {maximumLengthSubstring} from '../script'

describe('3090. Maximum Length Substring With Two Occurrences', (): void => {
    it('substring bounded by a third occurrence of a repeating character', (): void => {
        expect(maximumLengthSubstring('bcbbbcba'))
            .toBe(4)
    })

    it('single character repeated more than twice', (): void => {
        expect(maximumLengthSubstring('aaaa'))
            .toBe(2)
    })

    it('minimum length string with two distinct characters', (): void => {
        expect(maximumLengthSubstring('ab'))
            .toBe(2)
    })

    it('minimum length string with a repeated character', (): void => {
        expect(maximumLengthSubstring('aa'))
            .toBe(2)
    })

    it('every character appears at most twice across the whole string', (): void => {
        expect(maximumLengthSubstring('aabbcc'))
            .toBe(6)
    })

    it('window shrinks from the left after exceeding the limit mid string', (): void => {
        expect(maximumLengthSubstring('aaabbb'))
            .toBe(4)
    })
})
