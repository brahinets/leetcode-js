import {nearestPalindromic} from '../script'

describe('564. Find the Closest Palindrome', (): void => {
    it('nearest palindrome for 3-digit number', (): void => {
        expect(nearestPalindromic("123"))
            .toEqual("121")
    })

    it('nearest palindrome for 18-digit number', (): void => {
        expect(nearestPalindromic("807045053224792883"))
            .toEqual("807045053350540708")
    })

    it('smaller palindrome with different digit count for 11', (): void => {
        expect(nearestPalindromic("11"))
            .toEqual("9")
    })

    it('smaller palindrome when equidistant candidates exist for 1', (): void => {
        expect(nearestPalindromic("1"))
            .toEqual("0")
    })
})
