import {isPalindrome} from '../script'

describe('125. Valid Palindrome', (): void => {

    it('Not palindrome', (): void => {
        expect(isPalindrome("race a car"))
            .toBe(false)
    })

    it('Empty string makes palindrome', (): void => {
        expect(isPalindrome(" "))
            .toBe(true)
    })

    it('One word makes palindrome', (): void => {
        expect(isPalindrome("amanaplanacanalpanama"))
            .toBe(true)
    })

    it('Multiple words makes palindrome', (): void => {
        expect(isPalindrome("a man a plan a canal panama"))
            .toBe(true)
    })

    it('Multiple words makes palindrome. Spec symbols are ignored', (): void => {
        expect(isPalindrome("a man, a plan, a canal: panama"))
            .toBe(true)
    })

    it('Palindrome is case-insensitive', (): void => {
        expect(isPalindrome("AMANAPLANACanalpanama"))
            .toBe(true)
    })
})
