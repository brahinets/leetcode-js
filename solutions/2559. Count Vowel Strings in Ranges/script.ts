export {vowelStrings}

const VOWELS: string[] = ['a', 'e', 'i', 'o', 'u']

function vowelStrings(words: string[], queries: number[][]): number[] {
    const result: number[] = []

    for (const [left, right] of queries) {
        const count: number = words.slice(left, right + 1)
            .filter((word: string): boolean => isVowelString(word))
            .length

        result.push(count)
    }

    return result
}

function isVowelString(word: string): boolean {
    return VOWELS.includes(word.charAt(0)) && VOWELS.includes(word.charAt(word.length - 1))
}
