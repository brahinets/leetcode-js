export {longestPalindromeSubseq}

function longestPalindromeSubseq(s: string): number {
    let maxPalindrome: string = "";

    const words: string[] = generateAllSubsequences(s);
    for (const word of words) {
        if (word.length > maxPalindrome.length && isPalindrome(word)) {
            maxPalindrome = word;
        }
    }

    return maxPalindrome.length;
}

function generateAllSubsequences(string: string): string[] {
    const bits: number = string.length;
    const bitsCombinations: number = Math.pow(2, bits);
    const chars: string[] = string.split("");

    const result: string[] = [];
    for (let i: number = 0; i < bitsCombinations; i++) {
        let str: string = "";

        for (let j: number = 0; j < bits; j++) {
            if ((i & (1 << j)) !== 0) {
                str += chars[j];
            }
        }

        result.push(str);
    }

    return result;
}

const isPalindrome = (string: string): boolean => {
    for (let i: number = 0; i < string.length / 2; i++) {
        if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
            return false
        }
    }

    return true;
}