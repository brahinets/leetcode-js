export {numTilings}

const mod: number = 10 ** 9 + 7

function numTilings(n: number): number {
    const dp: number[] = [1, 2]

    for (let i: number = 2; i < n; i++) {
        dp[i] = (dp[i - 1] * 2 + (dp[i - 3] ?? 1)) % mod
    }

    return dp[n - 1]
}
