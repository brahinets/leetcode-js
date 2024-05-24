import {count} from "../../common/array-utils"

export {maxScoreWords}

function maxScoreWords(words: string[], letters: string[], score: number[]): number {
    let maxScore: number = 0

    for (const subset of subsets(words)) {
        let scoreForSubset: number = 0

        const freq: Map<string, number> = count(letters)

        let wordsToBuild: number = subset.length
        for (const w of subset) {
            let notFilled: boolean = false
            for (const letter of w) {
                scoreForSubset += score[letter.charCodeAt(0) - 'a'.charCodeAt(0)]

                if (freq.has(letter) && freq.get(letter)! > 0) {
                    freq.set(letter, freq.get(letter)! - 1)
                } else {
                    notFilled = true
                    break
                }
            }

            if (notFilled) {
                break
            }
            wordsToBuild--
        }
        if (wordsToBuild === 0) {
            maxScore = Math.max(maxScore, scoreForSubset)
        }
    }

    return maxScore
}

function subsets(nums: string[]): string[][] {
    const subsets: string[][] = [[]]

    for (const num of nums) {
        const newSubsets: string[][] = []

        for (const subset of subsets) {
            newSubsets.push([...subset, num])
        }

        subsets.push(...newSubsets)
    }

    return subsets
}

