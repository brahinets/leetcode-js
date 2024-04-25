import {arrayOfZeros} from "../../common/array-factories"

export {longestIdealString}

function longestIdealString(s: string, k: number): number {
    const codes: number[] = []
    for (const char of s) {
        codes.push(char.charCodeAt(0) - 'a'.charCodeAt(0))
    }

    const dp: number[] = arrayOfZeros(26)
    for (const code of codes) {
        for (let i: number = code - k; i <= code + k; i++) {
            if (i >= 0 && i < 26 && dp[i] > dp[code]) {
                dp[code] = dp[i]
            }
        }

        dp[code]++
    }

    return Math.max(...dp)
}
