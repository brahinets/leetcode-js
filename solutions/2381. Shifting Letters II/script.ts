import {arrayOfZeros} from "../../common/array-factories"

export {shiftingLetters}

const ALPHABET: string = 'abcdefghijklmnopqrstuvwxyz'
const ALPHABET_LENGTH: number = ALPHABET.length

function shiftingLetters(s: string, shifts: number[][]): string {
    const charShifts: number[] = calculateCharShifts(s.length, shifts)

    let result: string[] = []
    for (let i: number = 0; i < s.length; ++i) {
        const shift: number = (charShifts[i] % ALPHABET_LENGTH + ALPHABET_LENGTH) % ALPHABET_LENGTH
        const newIndex: number = (s.charCodeAt(i) - 'a'.charCodeAt(0) + shift) % ALPHABET_LENGTH
        result.push(ALPHABET[newIndex])
    }

    return result.join('')
}

function calculateCharShifts(length: number, shiftFormulas: number[][]): number[] {
    const charShifts: number[] = arrayOfZeros(length + 1)

    for (let [start, end, direction] of shiftFormulas) {
        charShifts[start] += direction === 1 ? 1 : -1

        if (end + 1 < length) {
            charShifts[end + 1] -= direction === 1 ? 1 : -1
        }
    }

    let currentShift: number = 0
    for (let i: number = 0; i < length; ++i) {
        currentShift += charShifts[i]
        charShifts[i] = currentShift
    }

    return charShifts
}
