import {arrayOfZeros} from "../../common/array-factories"

export {minExtraChar}

function minExtraChar(s: string, dictionary: string[]): number {
    let dp: number[] = arrayOfZeros(s.length + 1)
    dp[0] = 1

    for (let i: number = 1; i <= s.length; i++) {
        dp[i] = dp[i - 1] + 1

        for (let word of dictionary) {
            if (s.substring(i - word.length, i) === word) {
                dp[i] = Math.min(dp[i], dp[i - word.length])
            }
        }
    }

    return dp[s.length] - 1
}
