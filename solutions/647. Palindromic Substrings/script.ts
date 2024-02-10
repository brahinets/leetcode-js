import {isPalindrome} from "../../common/string-utils"

export {countSubstrings}

function countSubstrings(s: string): number {
    let palindromesCount: number = 0

    for (let start: number = 0; start < s.length; start++) {
        for (let end: number = start; end < s.length; end++) {
            const checked: string = s.substring(start, end + 1)

            if (isPalindrome(checked)) {
                palindromesCount++
            }
        }
    }

    return palindromesCount
}
