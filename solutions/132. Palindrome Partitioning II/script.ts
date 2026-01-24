import {matrixOf, arrayOfZeros} from "../../common/array-factories"

export {minCut}

function minCut(s: string): number {
    const n = s.length
    if (n <= 1) {
        return 0
    }

    const isPalin: boolean[][] = matrixOf(false, n, n)

    for (let i = 0; i < n; i++) {
        isPalin[i][i] = true
    }

    for (let i = 0; i < n - 1; i++) {
        isPalin[i][i + 1] = s[i] === s[i + 1]
    }

    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1
            isPalin[i][j] = s[i] === s[j] && isPalin[i + 1][j - 1]
        }
    }

    const dp: number[] = arrayOfZeros(n)

    for (let i = 0; i < n; i++) {
        if (isPalin[0][i]) {
            dp[i] = 0
        } else {
            dp[i] = i
            for (let j = 1; j <= i; j++) {
                if (isPalin[j][i]) {
                    dp[i] = Math.min(dp[i], dp[j - 1] + 1)
                }
            }
        }
    }

    return dp[n - 1]
}
