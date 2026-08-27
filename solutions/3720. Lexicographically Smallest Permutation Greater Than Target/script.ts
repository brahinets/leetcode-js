import {arrayOfZeros} from '../../common/array-factories'

export {lexGreaterPermutation}

const ALPHABET_SIZE: number = 26
const LOWERCASE_A_CHARACTER_CODE: number = 'a'.charCodeAt(0)

function lexGreaterPermutation(s: string, target: string): string {
    const length: number = s.length
    const letterFrequency: number[] = countLetterFrequency(s)
    const greaterAlternativeAtIndex: Array<number | null> = new Array<number | null>(length).fill(null)

    let matchedLength: number = length

    for (let index: number = 0; index < length; index++) {
        const targetLetterIndex: number = target.charCodeAt(index) - LOWERCASE_A_CHARACTER_CODE

        greaterAlternativeAtIndex[index] = findSmallestGreaterLetterIndex(letterFrequency, targetLetterIndex)

        if (letterFrequency[targetLetterIndex] > 0) {
            letterFrequency[targetLetterIndex] -= 1
        } else {
            matchedLength = index
            break
        }
    }

    const boundaryIndex: number = Math.min(matchedLength, length - 1)

    let pivotIndex: number = -1

    for (let index: number = boundaryIndex; index >= 0; index--) {
        if (greaterAlternativeAtIndex[index] !== null) {
            pivotIndex = index
            break
        }
    }

    if (pivotIndex === -1) {
        return ''
    }

    return buildResult(s, target, pivotIndex, greaterAlternativeAtIndex[pivotIndex] as number)
}

function countLetterFrequency(word: string): number[] {
    const letterFrequency: number[] = arrayOfZeros(ALPHABET_SIZE)

    for (const character of word) {
        letterFrequency[character.charCodeAt(0) - LOWERCASE_A_CHARACTER_CODE] += 1
    }

    return letterFrequency
}

function findSmallestGreaterLetterIndex(letterFrequency: number[], letterIndex: number): number | null {
    for (let candidateIndex: number = letterIndex + 1; candidateIndex < letterFrequency.length; candidateIndex++) {
        if (letterFrequency[candidateIndex] > 0) {
            return candidateIndex
        }
    }

    return null
}

function buildResult(s: string, target: string, pivotIndex: number, chosenLetterIndex: number): string {
    const remainingFrequency: number[] = countLetterFrequency(s)

    for (let index: number = 0; index < pivotIndex; index++) {
        remainingFrequency[target.charCodeAt(index) - LOWERCASE_A_CHARACTER_CODE] -= 1
    }

    remainingFrequency[chosenLetterIndex] -= 1

    const resultCharacters: string[] = []

    for (let index: number = 0; index < pivotIndex; index++) {
        resultCharacters.push(target[index])
    }

    resultCharacters.push(String.fromCharCode(chosenLetterIndex + LOWERCASE_A_CHARACTER_CODE))

    for (let letterIndex: number = 0; letterIndex < ALPHABET_SIZE; letterIndex++) {
        for (let count: number = 0; count < remainingFrequency[letterIndex]; count++) {
            resultCharacters.push(String.fromCharCode(letterIndex + LOWERCASE_A_CHARACTER_CODE))
        }
    }

    return resultCharacters.join('')
}
