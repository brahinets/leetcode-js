export {countConsistentStrings}

function countConsistentStrings(allowed: string, words: string[]): number {
    let count: number = 0

    for (let i: number = 0; i < words.length; i++) {
        if (isConsistent(words[i], allowed)) {
            count++
        }
    }

    return count
}

function isConsistent(word: string, allowed: string) {
    let isConsistent: boolean = true

    for (let j: number = 0; j < word.length; j++) {
        if (!allowed.includes(word[j])) {
            isConsistent = false
            break
        }
    }

    return isConsistent;
}
