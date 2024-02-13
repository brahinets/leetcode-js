import {firstPalindrome} from '../script'

describe('2108. Find First Palindromic String in the Array', (): void => {

    it('First word palindrome', (): void => {
        expect(firstPalindrome(["aba", "car", "ada", "racecar", "cool"]))
            .toBe("aba")
    })

    it('Middle word palindrome', (): void => {
        expect(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]))
            .toBe("ada")
    })

    it('Last word palindrome', (): void => {
        expect(firstPalindrome(["notapalindrome", "racecar"]))
            .toBe("racecar")
    })

    it('Absent palindrome word', (): void => {
        expect(firstPalindrome(["def", "ghi"]))
            .toBe("")
    })
})
