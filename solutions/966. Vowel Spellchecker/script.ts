export {spellchecker}

const VOWELS: Set<string> = new Set(['a', 'e', 'i', 'o', 'u'])

function spellchecker(wordlist: string[], queries: string[]): string[] {
    const exactWords: Set<string> = new Set<string>(wordlist)
    const caseInsensitiveWords: Map<string, string> = new Map<string, string>()
    const vowelErrorWords: Map<string, string> = new Map<string, string>()

    for (const word of wordlist) {
        const lowerWord: string = word.toLowerCase()
        if (!caseInsensitiveWords.has(lowerWord)) {
            caseInsensitiveWords.set(lowerWord, word)
        }

        const devoweledWord: string = devowel(lowerWord)
        if (!vowelErrorWords.has(devoweledWord)) {
            vowelErrorWords.set(devoweledWord, word)
        }
    }

    return queries.map((query: string): string => {
        if (exactWords.has(query)) {
            return query
        }

        const lowerQuery: string = query.toLowerCase()
        if (caseInsensitiveWords.has(lowerQuery)) {
            return caseInsensitiveWords.get(lowerQuery)!
        }

        const devoweledQuery: string = devowel(lowerQuery)
        return vowelErrorWords.get(devoweledQuery) || ""
    })
}

function devowel(word: string): string {
    let result: string = ''

    for (const char of word) {
        result += VOWELS.has(char) ? '*' : char
    }

    return result
}
