export {prefixCount}

function prefixCount(words: string[], pref: string): number {
    return words.filter((word: string): boolean => word.startsWith(pref)).length
}
