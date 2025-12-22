import {arrayOf} from "../../common/array-factories"

export {minDeletionSize}

function minDeletionSize(strs: string[]): number {
    const dp: number[] = arrayOf(1, strs[0].length)

    for (let i: number = 0; i < strs[0].length; i++) {
        for (let j: number = 0; j < i; j++) {
            let canExtend: boolean = true

            for (const str of strs) {
                if (str[j] > str[i]) {
                    canExtend = false
                    break
                }
            }

            if (canExtend) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    const longestSortedColumns: number = Math.max(...dp)
    return strs[0].length - longestSortedColumns
}
