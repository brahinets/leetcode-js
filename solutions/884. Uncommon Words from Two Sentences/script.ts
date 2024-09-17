import {count} from "../../common/array-utils"

export {uncommonFromSentences}

function uncommonFromSentences(s1: string, s2: string): string[] {
    const words1: string[] = s1.split(' ')
    const words2: string[] = s2.split(' ')
    const words: string[] = words1.concat(words2)
    const wordCount: Map<string, number> = count(words)

    const uncommonWords: string[] = []
    for (const [word, count] of wordCount) {
        if (count === 1) {
            uncommonWords.push(word)
        }
    }

    return uncommonWords
}
