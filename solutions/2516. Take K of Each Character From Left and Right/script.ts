import {arrayOfZeros} from "../../common/array-factories"

export {takeCharacters}

function takeCharacters(s: string, k: number): number {
    let count: number[] = arrayOfZeros(3)

    for (const c of s.split("")) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    for (let i: number = 0; i < 3; i++) {
        if (count[i] < k) return -1
    }

    let window: number[] = arrayOfZeros(3)
    let left: number = 0
    let maxWindow: number = 0

    for (let right: number = 0; right < s.length; right++) {
        window[s.charAt(right).charCodeAt(0) - 'a'.charCodeAt(0)]++

        while (left <= right && (count[0] - window[0] < k || count[1] - window[1] < k || count[2] - window[2] < k)) {
            window[s.charAt(left).charCodeAt(0) - 'a'.charCodeAt(0)]--
            left++
        }

        maxWindow = Math.max(maxWindow, right - left + 1)
    }

    return s.length - maxWindow
}
