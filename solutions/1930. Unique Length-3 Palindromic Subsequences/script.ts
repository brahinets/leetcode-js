import {arrayOf} from "../../common/array-factories"

export {countPalindromicSubsequence}

const ALPHABET_LENGTH: number = 26

function countPalindromicSubsequence(s: string): number {
    const [firstOccurrence, lastOccurrence]: [number[], number[]] = findEdgeOccurrences(s)

    let palindromicSubsequenceCount: number = 0
    for (let i: number = 0; i < ALPHABET_LENGTH; i++) {
        if (firstOccurrence[i] !== -1 && firstOccurrence[i] !== lastOccurrence[i]) {
            const uniqueChars: Set<string> = new Set<string>(s.slice(firstOccurrence[i] + 1, lastOccurrence[i]))
            palindromicSubsequenceCount += uniqueChars.size
        }
    }

    return palindromicSubsequenceCount
}

function findEdgeOccurrences(s: string): [number[], number[]] {
    const firstOccurrence: number[] = arrayOf(-1, ALPHABET_LENGTH)
    const lastOccurrence: number[] = arrayOf(-1, ALPHABET_LENGTH)
    const aCharCode: number = 'a'.charCodeAt(0)

    for (let i: number = 0; i < s.length; i++) {
        const charIndex: number = s.charCodeAt(i) - aCharCode

        if (firstOccurrence[charIndex] === -1) {
            firstOccurrence[charIndex] = i
        }

        lastOccurrence[charIndex] = i
    }

    return [firstOccurrence, lastOccurrence]
}
