import {count} from "../../common/array-utils"

export {countCharacters}

function countCharacters(words: string[], chars: string): number {
    return words.filter((word: string) => canBuild(word, chars))
        .reduce((sum: number, word: string) => sum + word.length, 0)
}

function canBuild(word: string, chars: string): boolean {
    const wordLetters: Map<string, number> = count(word.split(""))
    const charsLetters: Map<string, number> = count(chars.split(""))

    for (const [letter, needLetters] of wordLetters) {
        const haveLetters: number = charsLetters.get(letter) ?? 0
        if (needLetters > haveLetters) {
            return false
        }
    }

    return true
}
