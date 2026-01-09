import {matrixOf} from "../../common/array-factories"

export {numWays}

const MOD: number = 10 ** 9 + 7

function numWays(words: string[], target: string): number {
    const wordLength = words[0].length
    const targetLength = target.length

    const dp: number[][] = matrixOf(-1, wordLength, targetLength)
    const charFrequency: number[][] = collectFrequencies(wordLength, words)

    return getWords(words, target, 0, 0, dp, charFrequency)
}

function collectFrequencies(wordLength: number, words: string[]): number[][] {
    let charFrequency: number[][] = matrixOf(0, wordLength, 26)

    for (const word of words) {
        for (let j: number = 0; j < wordLength; j++) {
            const character: number = word.charCodeAt(j) - 'a'.charCodeAt(0)
            charFrequency[j][character]++
        }
    }

    return charFrequency
}

function getWords(
    words: string[],
    target: string,
    wordsIndex: number,
    targetIndex: number,
    dp: number[][],
    charFrequency: number[][]
): number {
    if (targetIndex == target.length) {
        return 1
    }

    if (wordsIndex == words[0].length || words[0].length - wordsIndex < target.length - targetIndex) {
        return 0
    }

    if (dp[wordsIndex][targetIndex] != -1) {
        return dp[wordsIndex][targetIndex]
    }

    const currentPosition: number = target.charCodeAt(targetIndex) - 'a'.charCodeAt(0)

    let countWays: number = 0
    countWays += getWords(words, target, wordsIndex + 1, targetIndex, dp, charFrequency)
    countWays += getWords(words, target, wordsIndex + 1, targetIndex + 1, dp, charFrequency)
        * charFrequency[wordsIndex][currentPosition]

    dp[wordsIndex][targetIndex] = countWays % MOD

    return dp[wordsIndex][targetIndex]
}
