import {isPalindrome} from '../script'

describe('9. Palindrome Number', (): void => {
    it('Symmetric positive is palindrome', (): void => {
        expect(isPalindrome(121))
            .toBe(true)
    })

    it('Negative is not palindrome', (): void => {
        expect(isPalindrome(-121))
            .toBe(false)
    })

    it('Asymmetric positive is not palindrome', (): void => {
        expect(isPalindrome(10))
            .toBe(false)
    })
})
