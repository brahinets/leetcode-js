export {countConsistentStrings}

function countConsistentStrings(allowed: string, words: string[]): number {
    const allowedCharacters: Set<string> = new Set<string>(allowed.split(''))
    let count: number = 0

    for (const word of words) {
        if (isConsistent(word, allowedCharacters)) {
            count++
        }
    }

    return count
}

function isConsistent(word: string, allowed: Set<string>): boolean {
    let isConsistent: boolean = true

    for (let char of word) {
        if (!allowed.has(char)) {
            isConsistent = false
            break
        }
    }

    return isConsistent;
}
