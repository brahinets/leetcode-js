export {wordBreak}

function wordBreak(s: string, wordDict: string[]): boolean {
    for (const word of wordDict) {
        if (word === s) {
            return true
        }

        if (s.startsWith(word)) {
            if (wordBreak(s.slice(word.length), wordDict)) {
                return true
            }
        }
    }

    return false
}
