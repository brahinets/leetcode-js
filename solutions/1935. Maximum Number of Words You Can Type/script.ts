export {canBeTypedWords}

function canBeTypedWords(text: string, brokenLetters: string): number {
    const broken: Set<string> = new Set<string>(brokenLetters)
    let words: string[] = text.split(' ')

    let canType: number = 0
    for (const word of words) {
        if (canTypeWord(word, broken)) {
            canType++
        }
    }

    return canType
}

function canTypeWord(word: string, brokenLetters: Set<string>): boolean {
    for (const letter of word) {
        if (brokenLetters.has(letter)) {
            return false
        }
    }

    return true
}
