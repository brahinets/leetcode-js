export {lexPalindromicPermutation}

const ALPHABET_SIZE: number = 26
const LOWERCASE_A_CHARACTER_CODE: number = 'a'.charCodeAt(0)

function lexPalindromicPermutation(s: string, target: string): string {
    const length: number = s.length
    const letterFrequency: number[] = countLetterFrequency(s)
    const oddLetterIndices: number[] = []

    for (let letterIndex: number = 0; letterIndex < ALPHABET_SIZE; letterIndex++) {
        if (letterFrequency[letterIndex] % 2 === 1) {
            oddLetterIndices.push(letterIndex)
        }
    }

    const isLengthOdd: boolean = length % 2 === 1

    if ((isLengthOdd && oddLetterIndices.length !== 1) || (!isLengthOdd && oddLetterIndices.length !== 0)) {
        return ''
    }

    const middleLetterIndex: number | null = isLengthOdd ? oddLetterIndices[0] : null
    const halfLength: number = Math.floor(length / 2)
    const pairCount: number[] = letterFrequency.map((count: number): number => Math.floor(count / 2))
    const greaterAlternativeAtIndex: Array<number | null> = new Array<number | null>(halfLength).fill(null)

    let matchedHalfLength: number = halfLength

    for (let index: number = 0; index < halfLength; index++) {
        const targetLetterIndex: number = target.charCodeAt(index) - LOWERCASE_A_CHARACTER_CODE

        greaterAlternativeAtIndex[index] = findSmallestGreaterLetterIndex(pairCount, targetLetterIndex)

        if (pairCount[targetLetterIndex] > 0) {
            pairCount[targetLetterIndex] -= 1
        } else {
            matchedHalfLength = index
            break
        }
    }

    if (matchedHalfLength === halfLength) {
        const exactCandidate: string = buildPalindrome(target.slice(0, halfLength), middleLetterIndex)

        if (exactCandidate > target) {
            return exactCandidate
        }
    }

    const boundaryIndex: number = Math.min(matchedHalfLength, halfLength - 1)

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

    return buildResult(s, target, pivotIndex, greaterAlternativeAtIndex[pivotIndex] as number, middleLetterIndex)
}

function countLetterFrequency(word: string): number[] {
    const letterFrequency: number[] = new Array<number>(ALPHABET_SIZE).fill(0)

    for (const character of word) {
        letterFrequency[character.charCodeAt(0) - LOWERCASE_A_CHARACTER_CODE] += 1
    }

    return letterFrequency
}

function findSmallestGreaterLetterIndex(pairCount: number[], letterIndex: number): number | null {
    for (let candidateIndex: number = letterIndex + 1; candidateIndex < pairCount.length; candidateIndex++) {
        if (pairCount[candidateIndex] > 0) {
            return candidateIndex
        }
    }

    return null
}

function buildPalindrome(halfString: string, middleLetterIndex: number | null): string {
    const middleCharacter: string = middleLetterIndex === null ? '' : String.fromCharCode(middleLetterIndex + LOWERCASE_A_CHARACTER_CODE)

    return halfString + middleCharacter + reverseString(halfString)
}

function reverseString(word: string): string {
    return word.split('').reverse().join('')
}

function buildResult(s: string, target: string, pivotIndex: number, chosenLetterIndex: number, middleLetterIndex: number | null): string {
    const remainingPairCount: number[] = countLetterFrequency(s).map((count: number): number => Math.floor(count / 2))

    for (let index: number = 0; index < pivotIndex; index++) {
        remainingPairCount[target.charCodeAt(index) - LOWERCASE_A_CHARACTER_CODE] -= 1
    }

    remainingPairCount[chosenLetterIndex] -= 1

    const halfCharacters: string[] = []

    for (let index: number = 0; index < pivotIndex; index++) {
        halfCharacters.push(target[index])
    }

    halfCharacters.push(String.fromCharCode(chosenLetterIndex + LOWERCASE_A_CHARACTER_CODE))

    for (let letterIndex: number = 0; letterIndex < ALPHABET_SIZE; letterIndex++) {
        for (let count: number = 0; count < remainingPairCount[letterIndex]; count++) {
            halfCharacters.push(String.fromCharCode(letterIndex + LOWERCASE_A_CHARACTER_CODE))
        }
    }

    return buildPalindrome(halfCharacters.join(''), middleLetterIndex)
}
