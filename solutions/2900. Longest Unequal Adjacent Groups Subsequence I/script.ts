export {getLongestSubsequence}

function getLongestSubsequence(words: string[], groups: number[]): string[] {
    let result: string[] = []

    for (let i: number = 0; i < words.length; i++) {
        if (i === 0 || groups[i] !== groups[i - 1]) {
            result.push(words[i])
        }
    }

    return result
}
