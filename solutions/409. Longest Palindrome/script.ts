import {count} from "../../common/array-utils"

export {longestPalindrome}

function longestPalindrome(s: string): number {
    const counts: Map<string, number> = count(s.split(""))

    let pairedLetters: number = 0
    for (const count of counts.values()) {
        pairedLetters += Math.floor(count / 2)
    }

    const hasNonPairedLetter: boolean = s.length > pairedLetters * 2

    return pairedLetters * 2 + (hasNonPairedLetter ? 1 : 0)
}
