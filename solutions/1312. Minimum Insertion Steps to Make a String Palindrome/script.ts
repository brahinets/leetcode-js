import {matrixOfEmptyStrings} from "../../common/array-factories"

export {minInsertions}

function minInsertions(s: string): number {
    const palindromicSubsequences: string[][] = matrixOfEmptyStrings(s.length, s.length)

    for (let start: number = s.length - 1; start >= 0; start--) {
        palindromicSubsequences[start][start] = s.charAt(start)

        let longestPalindromicSubsequenceBetweenStartAndEnd: string
        for (let end: number = start + 1; end < s.length; end++) {
            if (s.charAt(start) === s.charAt(end)) {
                longestPalindromicSubsequenceBetweenStartAndEnd = s.charAt(start) + palindromicSubsequences[start + 1][end - 1] + s.charAt(end)
            } else {
                if (palindromicSubsequences[start][end - 1].length > palindromicSubsequences[start + 1][end].length) {
                    longestPalindromicSubsequenceBetweenStartAndEnd = palindromicSubsequences[start][end - 1]
                } else {
                    longestPalindromicSubsequenceBetweenStartAndEnd = palindromicSubsequences[start + 1][end]
                }
            }

            palindromicSubsequences[start][end] = longestPalindromicSubsequenceBetweenStartAndEnd
        }
    }

    return s.length - palindromicSubsequences[0][s.length - 1].length
}
