import {arrayOf} from "../../common/array-factories"

export {getWordsInLongestSubsequence}

function getWordsInLongestSubsequence(words: string[], groups: number[]): string[] {
    const dp: number[] = arrayOf(1, groups.length)
    const previousIndices: number[] = arrayOf(-1, groups.length)
    let maxIndex: number = 0

    for (let current: number = 1; current < groups.length; current++) {
        for (let previous: number = 0; previous < current; previous++) {
            if (
                isHammingDistanceOne(words[current], words[previous]) &&
                groups[current] !== groups[previous] &&
                dp[previous] + 1 > dp[current]
            ) {
                dp[current] = dp[previous] + 1
                previousIndices[current] = previous
            }
        }

        if (dp[current] > dp[maxIndex]) {
            maxIndex = current
        }
    }

    return buildSubsequence(words, previousIndices, maxIndex)
}

function isHammingDistanceOne(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) {
        return false
    }

    let differences: number = 0
    for (let i: number = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            differences++
            if (differences > 1) {
                return false
            }
        }
    }

    return differences === 1
}

function buildSubsequence(words: string[], previousIndices: number[], startIndex: number): string[] {
    const subsequence: string[] = []

    for (let i: number = startIndex; i >= 0; i = previousIndices[i]) {
        subsequence.push(words[i])
    }

    subsequence.reverse()

    return subsequence
}
