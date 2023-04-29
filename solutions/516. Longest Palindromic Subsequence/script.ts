import {matrixOfZeros} from "../../common/array-utils";

export {longestPalindromeSubseq}

function longestPalindromeSubseq(s: string): number {
    const longestPalindromicSubsequences: number[][] = matrixOfZeros(s.length, s.length);

    for (let start: number = s.length - 1; start >= 0; start--) {
        longestPalindromicSubsequences[start][start] = 1;

        for (let end: number = start + 1; end < s.length; end++) {
            let maxPalindromicSubsequenceBetweenStartAndEnd: number;
            if (s.charAt(start) === s.charAt(end)) {
                maxPalindromicSubsequenceBetweenStartAndEnd = longestPalindromicSubsequences[start + 1][end - 1] + 2;
            } else {
                maxPalindromicSubsequenceBetweenStartAndEnd = Math.max(longestPalindromicSubsequences[start + 1][end], longestPalindromicSubsequences[start][end - 1]);
            }

            longestPalindromicSubsequences[start][end] = maxPalindromicSubsequenceBetweenStartAndEnd;
        }
    }

    return longestPalindromicSubsequences[0][s.length - 1];
}