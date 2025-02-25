import {arrayOfZeros} from "../../common/array-factories"

export {minimumPushes}

function minimumPushes(word: string): number {
    const frequency: number[] = sortCharsByFrequency(word)

    let totalPushes:number = 0
    for (let i = 0; i < 26; i++) {
        totalPushes += Math.floor(i / 8 + 1) * frequency[i]
    }

    return totalPushes
}

function sortCharsByFrequency(word: string) {
    const alphabetLength: number = 26
    const frequency: number[] = arrayOfZeros(alphabetLength)

    for (const c of word) {
        frequency[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    frequency.sort((a: number, b: number): number => b - a)

    return frequency
}
