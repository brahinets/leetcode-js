import {isPalindrome} from "../../common/string-utils"

export {longestPalindrome}

function longestPalindrome(s: string): string {
    let maxPalindrome: string = ""

    for (let i: number = 0; i < s.length && i < s.length - maxPalindrome.length; i++) {
        for (let j: number = i; j < s.length; j++) {
            const checked: string = s.substring(i, j + 1)
            if (isPalindrome(checked) && checked.length > maxPalindrome.length) {
                maxPalindrome = checked
            }
        }
    }

    return maxPalindrome
}
