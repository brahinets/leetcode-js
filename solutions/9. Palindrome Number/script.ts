import {isPalindrome as isPalindromeWord} from '../../common/string-utils'

export {isPalindrome}

function isPalindrome(x: number): boolean {
    const str: string = String(x)

    return isPalindromeWord(str)
}
