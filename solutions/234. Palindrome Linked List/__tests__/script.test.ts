import {isPalindrome} from '../script'

import {linkedListOf} from "../../../common/list-factories"

describe('234. Palindrome Linked List', (): void => {
    it('Even palindrome', (): void => {
        expect(isPalindrome(linkedListOf(1, 2, 2, 1)))
            .toBe(true)
    })

    it('Odd palindrome', (): void => {
        expect(isPalindrome(linkedListOf(1, 2, 1)))
            .toBe(true)
    })

    it('Even not palindrome', (): void => {
        expect(isPalindrome(linkedListOf(1, 2)))
            .toBe(false)
    })
    it('Odd not palindrome', (): void => {
        expect(isPalindrome(linkedListOf(1, 2, 2)))
            .toBe(false)
    })
})
