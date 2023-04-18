export {mergeAlternately}

function mergeAlternately(word1: string, word2: string): string {
    let result: string = "";

    const word1Chars: string[] = word1.split("");
    const word2Chars: string[] = word2.split("");

    while (word1Chars.length > 0 || word2Chars.length > 0) {
        const char1: string | undefined = word1Chars.shift();
        if (char1 !== undefined) {
            result += char1;
        }

        const char2: string | undefined = word2Chars.shift();
        if (char2 !== undefined) {
            result += char2;
        }
    }

    return result;
}