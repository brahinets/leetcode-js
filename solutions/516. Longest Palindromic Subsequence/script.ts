import {matrixOfZeros} from "../../common/array-utils";

export {longestPalindromeSubseq}

function longestPalindromeSubseq(s: string): number {
    const dp: number[][] = matrixOfZeros(s.length, s.length);

    for (let start: number = s.length - 1; start >= 0; start--) {
        dp[start][start] = 1;

        for (let end: number = start + 1; end < s.length; end++) {
            let maxPalindromeBetweenStartAndEnd: number;
            if (s.charAt(start) === s.charAt(end)) {
                maxPalindromeBetweenStartAndEnd = dp[start + 1][end - 1] + 2;
            } else {
                maxPalindromeBetweenStartAndEnd = Math.max(dp[start + 1][end], dp[start][end - 1]);
            }

            dp[start][end] = maxPalindromeBetweenStartAndEnd;
        }
    }

    return dp[0][s.length - 1];
}