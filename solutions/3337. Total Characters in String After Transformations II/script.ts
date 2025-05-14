import {arrayOfZeros} from "../../common/array-factories"

export {lengthAfterTransformations}

const MOD: number = 1e9 + 7
const ALPHABET_LENGTH: number = 26

function lengthAfterTransformations(s: string, t: number, nums: number[]): number {
    let frequencies: number[] = arrayOfZeros(ALPHABET_LENGTH)
    for (const ch of s) {
        frequencies[ch.charCodeAt(0) - 97]++
    }

    for (let step: number = 0; step < t; step++) {
        const nextFreq: number[] = arrayOfZeros(ALPHABET_LENGTH)

        for (let i: number = 0; i < ALPHABET_LENGTH; i++) {
            const count: number = frequencies[i]

            if (count === 0) {
                continue
            }

            const expand: number = nums[i]
            for (let j: number = 1; j <= expand; j++) {
                const idx: number = (i + j) % ALPHABET_LENGTH
                nextFreq[idx] = (nextFreq[idx] + count) % MOD
            }
        }

        frequencies = nextFreq
    }

    return frequencies.reduce((sum: number, val: number): number => (sum + val) % MOD, 0)
}
