import { arrayOf } from "../../common/array-factories"

export { findTheString }

function findTheString(lcp: number[][]): string {
    const size: number = lcp.length
    const word: number[] = arrayOf(-1, size)

    for (let i: number = 0; i < size; i++) {
        const character: number = resolveCharacter(lcp, word, i)

        if (character === -1) {
            return ''
        }

        word[i] = character
    }

    if (!isValid(lcp, word, size)) {
        return ''
    }

    return word.map((character: number): string => String.fromCharCode('a'.charCodeAt(0) + character)).join('')
}

function resolveCharacter(lcp: number[][], word: number[], position: number): number {
    const forcedCharacter: number = findForcedCharacter(lcp, word, position)

    if (forcedCharacter === -2) {
        return -1
    }

    if (forcedCharacter !== -1) {
        return forcedCharacter
    }

    return findSmallestAllowedCharacter(lcp, word, position)
}

function findForcedCharacter(lcp: number[][], word: number[], position: number): number {
    let forcedCharacter: number = -1

    for (let j: number = 0; j < position; j++) {
        if (lcp[position][j] > 0) {
            if (forcedCharacter === -1) {
                forcedCharacter = word[j]
            } else if (forcedCharacter !== word[j]) {
                return -2
            }
        }
    }

    return forcedCharacter
}

function findSmallestAllowedCharacter(lcp: number[][], word: number[], position: number): number {
    const forbidden: Set<number> = new Set<number>()

    for (let j: number = 0; j < position; j++) {
        if (lcp[position][j] === 0) {
            forbidden.add(word[j])
        }
    }

    let character: number = 0

    while (forbidden.has(character)) {
        character++
    }

    return character < 26 ? character : -1
}

function isValid(lcp: number[][], word: number[], size: number): boolean {
    for (let i: number = 0; i < size; i++) {
        for (let j: number = 0; j < size; j++) {
            if (!isEntryValid(lcp, word, size, i, j)) {
                return false
            }
        }
    }

    return true
}

function isEntryValid(lcp: number[][], word: number[], size: number, i: number, j: number): boolean {
    if (i === j) {
        return lcp[i][j] === size - i
    }

    if (word[i] !== word[j]) {
        return lcp[i][j] === 0
    }

    const next: number = (i + 1 < size && j + 1 < size) ? lcp[i + 1][j + 1] : 0

    return lcp[i][j] === 1 + next
}
