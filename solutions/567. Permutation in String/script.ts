import {arrayOfZeros} from "../../common/array-factories"

export {checkInclusion}

const ALPHABET_SHIFT = 97

function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
        return false
    }

    const counts: number[] = arrayOfZeros(26)
    for (let i: number = 0; i < s1.length; i++) {
        counts[s1.charCodeAt(i) - ALPHABET_SHIFT]++
        counts[s2.charCodeAt(i) - ALPHABET_SHIFT]--
    }
    if (counts.every((c: number): boolean => c === 0)) {
        return true
    }

    for (let i: number = s1.length; i < s2.length; i++) {
        counts[s2.charCodeAt(i) - ALPHABET_SHIFT]--
        counts[s2.charCodeAt(i - s1.length) - ALPHABET_SHIFT]++

        if (counts.every((count: number): boolean => count === 0)) {
            return true
        }
    }

    return false
}
