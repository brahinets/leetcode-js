import {isAnagram} from '../script'

describe('242. Valid Anagram', (): void => {

    it('Non empty anagram', (): void => {
        expect(isAnagram("anagram", "nagaram"))
            .toBe(true)
    })

    it('Empty anagram', (): void => {
        expect(isAnagram("", ""))
            .toBe(true)
    })

    it('Not anagram', (): void => {
        expect(isAnagram("rat", "car"))
            .toBe(false)
    })
})
