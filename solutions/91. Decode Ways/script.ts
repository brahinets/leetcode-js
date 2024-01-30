import {arrayOfZeros} from "../../common/array-factories"

export {numDecodings}

function numDecodings(s: string): number {
    if (s.length === 0) {
        return 0
    }

    const dp: number[] = arrayOfZeros(s.length + 1)
    dp[0] = 1
    dp[1] = s.charAt(0) === '0' ? 0 : 1

    for (let i: number = 2; i <= s.length; i++) {
        const oneDigit: number = Number(s.substring(i - 1, i))
        const twoDigits: number = Number(s.substring(i - 2, i))

        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1]
        }

        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2]
        }
    }

    return dp[s.length]
}
