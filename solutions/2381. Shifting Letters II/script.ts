import {arrayOfZeros} from "../../common/array-factories"

export {shiftingLetters}

function shiftingLetters(s: string, shifts: number[][]): string {
    const charShifts: number[] = calculateCharShifts(s.length, shifts)

    let result: string[] = s.split('')
    for (let i: number = 0; i < s.length; ++i) {
        const shift: number = (charShifts[i] % 26 + 26) % 26

        result[i] = String.fromCharCode('a'.charCodeAt(0) + (s.charCodeAt(i) - 'a'.charCodeAt(0) + shift) % 26)
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
