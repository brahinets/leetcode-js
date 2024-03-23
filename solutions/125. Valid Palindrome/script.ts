import {isPalindrome as isPalindromeWord} from '../../common/string-utils'

export {isPalindrome}

function isPalindrome(s: string): boolean {
    const normalizedPhrase: string = s.toLowerCase()
        .replace(/[^a-z0-9]/gi, '')

    return isPalindromeWord(normalizedPhrase)
}
