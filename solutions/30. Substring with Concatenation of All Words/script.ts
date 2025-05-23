import {count} from "../../common/array-utils"

export {findSubstring}

function findSubstring(s: string, words: string[]): number[] {
    const wordCount: number = words.length
    const wordLength: number = words[0].length
    const totalLength: number = wordCount * wordLength
    const result: number[] = []

    if (s.length < totalLength) {
        return result
    }

    const wordCounts: Map<string, number> = count(words)
    for (let i: number = 0; i <= s.length - totalLength; i++) {
        const seenWords: Map<string, number> = new Map<string, number>()
        let j: number = 0

        while (j < wordCount) {
            const startIndex: number = i + j * wordLength
            const word: string = s.substring(startIndex, startIndex + wordLength)

            if (!wordCounts.has(word)) {
                break
            }

            seenWords.set(word, (seenWords.get(word) || 0) + 1)

            if (seenWords.get(word)! > wordCounts.get(word)!) {
                break
            }

            j++
        }

        if (j === wordCount) {
            result.push(i)
        }
    }

    return result
}
