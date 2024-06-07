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

    return findShortest(candidates) ?? word
}

function findPossiblePrefixes(dictionary: string[], word: string): string[] {
    return dictionary.filter((dict: string): boolean => word.startsWith(dict))
}

function findShortest(candidates: string[]): string | undefined {
    if (candidates.length === 0) {
        return undefined
    }

    let shortest: string = candidates[0]
    for (let i = 1; i < candidates.length; i++) {
        if (candidates[i].length < shortest.length) {
            shortest = candidates[i]
        }
    }

    return shortest
}
