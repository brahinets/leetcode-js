export {replaceWords}

function replaceWords(dictionary: string[], sentence: string): string {
    const words: string[] = sentence.split(" ")

    let result: string = ""
    for (let i = 0; i < words.length; i++) {
        result += findPrefix(dictionary, words[i])

        if (i < words.length - 1) {
            result += " "
        }
    }

    return result
}

function findPrefix(dictionary: string[], word: string): string {
    const candidates: string[] = findPossiblePrefixes(dictionary, word)

    if (candidates.length > 0) {
        return candidates.sort((a, b) => a.length - b.length)[0]
    } else {
        return word
    }
}

function findPossiblePrefixes(dictionary: string[], word: string): string[] {
    return dictionary.filter((dict: string): boolean => word.startsWith(dict))
}
