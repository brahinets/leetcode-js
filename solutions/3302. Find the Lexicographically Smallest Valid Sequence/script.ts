import {arrayOfZeros} from '../../common/array-factories'

export {validSequence}

function validSequence(word1: string, word2: string): number[] {
    const word1Length: number = word1.length
    const word2Length: number = word2.length
    const maximumMatchableSuffixLengths: number[] = getMaximumMatchableSuffixLengths(word1, word2)

    const result: number[] = []
    let word2Index: number = 0
    let hasUsedChange: boolean = false

    for (let word1Index: number = 0; word1Index < word1Length && word2Index < word2Length; word1Index++) {
        if (word1[word1Index] === word2[word2Index]) {
            result.push(word1Index)
            word2Index++
            continue
        }

        if (hasUsedChange) {
            continue
        }

        const remainingSuffixLength: number = word2Length - word2Index - 1
        if (maximumMatchableSuffixLengths[word1Index + 1] >= remainingSuffixLength) {
            result.push(word1Index)
            word2Index++
            hasUsedChange = true
        }
    }

    return word2Index === word2Length ? result : []
}

function getMaximumMatchableSuffixLengths(word1: string, word2: string): number[] {
    const word1Length: number = word1.length
    const word2Length: number = word2.length
    const maximumMatchableSuffixLengths: number[] = arrayOfZeros(word1Length + 1)

    let word2PointerFromEnd: number = word2Length
    for (let word1Index: number = word1Length - 1; word1Index >= 0; word1Index--) {
        if (word2PointerFromEnd > 0 && word1[word1Index] === word2[word2PointerFromEnd - 1]) {
            word2PointerFromEnd--
        }

        maximumMatchableSuffixLengths[word1Index] = word2Length - word2PointerFromEnd
    }

    return maximumMatchableSuffixLengths
}
