import {nearestPalindromic} from '../script'

describe('564. Find the Closest Palindrome', (): void => {
    it('Return palindrome', (): void => {
        expect(nearestPalindromic("123"))
            .toEqual("121")
    })

    it('Return palindrome #2', (): void => {
        expect(nearestPalindromic("807045053224792883"))
            .toEqual("807045053350540708")
    })

    it('Return smaller palindrome with different fraction', (): void => {
        expect(nearestPalindromic("11"))
            .toEqual("9")
    })

    it('Return smaller palindrome from same distance', (): void => {
        expect(nearestPalindromic("1"))
            .toEqual("0")
    })
})
