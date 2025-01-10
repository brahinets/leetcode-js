import {arrayOfZeros} from "../../common/array-factories"

export {wordSubsets}

const ALPHABET_LENGTH: number = 26

function wordSubsets(words1: string[], words2: string[]): string[] {
    const count: number[] = counts(words2)

    const result: string[] = []
    for (const word of words1) {
        const temp: number[] = arrayOfZeros(ALPHABET_LENGTH)
        for (const char of word) {
            temp[char.charCodeAt(0) - 97]++
        }

        let isUniversal: boolean = true
        for (let i: number = 0; i < ALPHABET_LENGTH; i++) {
            if (temp[i] < count[i]) {
                isUniversal = false
                break
            }
        }

        if (isUniversal) {
            result.push(word)
        }
    }

    return result
}

function counts(words2: string[]): number[] {
    const count: number[] = arrayOfZeros(ALPHABET_LENGTH)

    for (const word of words2) {
        const temp: number[] = arrayOfZeros(ALPHABET_LENGTH)

        for (const char of word) {
            temp[char.charCodeAt(0) - 97]++
        }

        for (let i: number = 0; i < 26; i++) {
            count[i] = Math.max(count[i], temp[i])
        }
    }

    return count
}
