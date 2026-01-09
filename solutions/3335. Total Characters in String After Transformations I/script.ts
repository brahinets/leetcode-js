import {arrayOfZeros} from "../../common/array-factories"
import {last} from "../../common/array-utils"

export {lengthAfterTransformations}

const MOD: number = 1e9 + 7
const ALPHABET_LENGTH: number = 26

function lengthAfterTransformations(s: string, t: number): number {
    let counts: number[] = arrayOfZeros(ALPHABET_LENGTH)
    for (const ch of s) {
        counts[ch.charCodeAt(0) - "a".charCodeAt(0)]++
    }

    for (let round: number = 0; round < t; round++) {
        let nextString: number[] = arrayOfZeros(ALPHABET_LENGTH)

        nextString[0] = last(counts)!
        nextString[1] = (last(counts)! + counts[0]) % MOD

        for (let i: number = 2; i < ALPHABET_LENGTH; i++) {
            nextString[i] = counts[i - 1]
        }

        counts = nextString
    }

    let result: number = 0
    for (let i: number = 0; i < ALPHABET_LENGTH; i++) {
        result = (result + counts[i]) % MOD
    }
    return result
}
