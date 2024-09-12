export {countConsistentStrings}

function countConsistentStrings(allowed: string, words: string[]): number {
    let count: number = 0

    for (const word of words) {
        if (isConsistent(word, allowed)) {
            count++
        }
    }

    return count
}

function isConsistent(word: string, allowed: string) {
    let isConsistent: boolean = true

    for (let char of word) {
        if (!allowed.includes(char)) {
            isConsistent = false
            break
        }
    }

    return isConsistent;
}
