import {arrayOf} from "../../common/array-factories"

export {numberOfSubstrings}

function numberOfSubstrings(s: string): number {
    const lastZeroStart: number[] = buildLastZeroStart(s)
    const maxZeros: number = Math.floor(Math.sqrt(s.length))

    let result: number = 0
    for (let end: number = 1; end <= s.length; end++) {
        result += countSubstringsForEnd(s, lastZeroStart, end, maxZeros)
    }

    return result
}

function buildLastZeroStart(s: string): number[] {
    const n: number = s.length
    const lastZeroStart: number[] = arrayOf(-1, n + 1)

    lastZeroStart[0] = -1

    for (let i: number = 0; i < n; i++) {
        if (i === 0 || s[i - 1] === '0') {
            lastZeroStart[i + 1] = i
        } else {
            lastZeroStart[i + 1] = lastZeroStart[i]
        }
    }

    return lastZeroStart
}

function countSubstringsForEnd(s: string, lastZeroStart: number[], end: number, maxZeros: number): number {
    let zerosCount: number = s[end - 1] === '0' ? 1 : 0
    let left: number = end
    let count: number = 0

    while (left > 0 && zerosCount <= maxZeros) {
        const onesCount: number = end - lastZeroStart[left] - zerosCount

        if (zerosCount * zerosCount <= onesCount) {
            count += Math.min(left - lastZeroStart[left], onesCount - zerosCount * zerosCount + 1)
        }

        left = lastZeroStart[left]

        zerosCount++
    }

    return count
}
