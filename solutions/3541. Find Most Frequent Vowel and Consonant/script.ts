import {count} from "../../common/array-utils"

export {maxFreqSum}

const VOWELS: string = "aeiou"

function maxFreqSum(s: string): number {
    const counts: Map<string, number> = count(s.split(''))

    let maxVowelFrequency: number = 0
    let maxConsonantFrequency: number = 0
    for (const [char, frequency] of counts) {
        if (VOWELS.includes(char)) {
            maxVowelFrequency = Math.max(maxVowelFrequency, frequency)
        } else {
            maxConsonantFrequency = Math.max(maxConsonantFrequency, frequency)
        }
    }

    return maxVowelFrequency + maxConsonantFrequency
}
