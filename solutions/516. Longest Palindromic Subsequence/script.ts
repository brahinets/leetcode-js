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
    const bitmasks: number[][] = generateBitmasks(string.length);
    const chars: string[] = string.split("");

    const result: string[] = [];
    for (const bitmask of bitmasks) {
        let str: string = "";

        for (let i: number = 0; i < bitmask.length; i++) {
            str += (bitmask[i] === 1 ? chars[i] : "");
        }

        result.push(str);
    }

    return result;
}

function generateBitmasks(bits: number): number[][] {
    const bitmasks: number[][] = [];

    for (let i: number = 0; i < Math.pow(2, bits); i++) {
        const bitmask: number[] = [];

        for (let j: number = 0; j < bits; j++) {
            bitmask.push((i & (1 << j)) !== 0 ? 1 : 0);
        }

        bitmasks.push(bitmask);
    }

    return bitmasks;
}

const isPalindrome = (string: string): boolean => {
    for (let i: number = 0; i < string.length / 2; i++) {
        if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
            return false
        }
    }

    return true;
}