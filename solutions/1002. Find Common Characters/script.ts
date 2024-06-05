import {count} from "../../common/array-utils"

export {commonChars}

function commonChars(words: string[]): string[] {
    const commons = collectCounts(words)

    return collectResult(commons)
}

function collectResult(commons: Map<string, number>): string[] {
    const result: string[] = []

    for (const [letter, count] of commons) {
        for (let i: number = 0; i < count; i++) {
            result.push(letter)
        }
    }

    return result
}

function collectCounts(words: string[]): Map<string, number> {
    const commons: Map<string, number> = count(words[0].split(""))

    for (let i: number = 1; i < words.length; i++) {
        const word: string = words[i]
        const second: Map<string, number> = count(word.split(""))

        for (let [firstLetter, firstCount] of commons) {
            const min: number = Math.min(firstCount, second.get(firstLetter) ?? 0)
            if (min === 0) {
                commons.delete(firstLetter)
            } else {
                commons.set(firstLetter, min)
            }
        }
    }

    return commons
}
