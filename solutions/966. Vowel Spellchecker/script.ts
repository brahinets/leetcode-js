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

        const devoweledWord: string = lowerWord.split('')
            .map((char: string): string => VOWELS.has(char) ? '*' : char)
            .join('')
        if (!vowelErrorWords.has(devoweledWord)) {
            vowelErrorWords.set(devoweledWord, word)
        }
    }

    const results: string[] = []
    for (const query of queries) {
        if (exactWords.has(query)) {
            results.push(query)
            continue
        }

        const lowerQuery: string = query.toLowerCase()
        if (caseInsensitiveWords.has(lowerQuery)) {
            results.push(caseInsensitiveWords.get(lowerQuery)!)
            continue
        }

        const devoweledQuery: string = lowerQuery.split('')
            .map((char: string): string => VOWELS.has(char) ? '*' : char)
            .join('')
        if (vowelErrorWords.has(devoweledQuery)) {
            results.push(vowelErrorWords.get(devoweledQuery)!)
            continue
        }

        results.push("")
    }

    return results
}
