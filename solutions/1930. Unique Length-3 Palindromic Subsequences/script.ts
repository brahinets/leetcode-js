import {count} from "../../common/array-utils"

export {countPalindromicSubsequence}

function countPalindromicSubsequence(s: string): number {
    let palindromicSubsequenceCount: number = 0

    const bounds: Set<string> = new Set<string>([...count(s.split(''))]
        .filter(([, count]: [string, number]): boolean => count > 1)
        .map(([char,]: [string, number]): string => char))

    for (const char of bounds) {
        const first: number = s.indexOf(char)
        const last: number = s.lastIndexOf(char)

        if (first !== last) {
            palindromicSubsequenceCount += new Set<string>(s.slice(first + 1, last)).size
        }
    }

    return palindromicSubsequenceCount
}
