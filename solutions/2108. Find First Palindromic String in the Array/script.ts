import {isPalindrome} from "../../common/string-utils"

export {firstPalindrome}

function firstPalindrome(words: string[]): string {
    for (const word of words) {
        if (isPalindrome(word)) {
            return word
        }
    }

    return ""
}
