export {soupServings}

function soupServings(n: number): number {
    const m: number = Math.ceil(n / 25)
    const dp: Map<number, Map<number, number>> = new Map<number, Map<number, number>>()

    dp.set(0, new Map<number, number>([[0, 0.5]]))

    for (let k: number = 1; k <= m; k++) {
        dp.set(k, new Map<number, number>())
        dp.get(0)!.set(k, 1.0)
        dp.get(k)!.set(0, 0.0)

        for (let j: number = 1; j <= k; j++) {
            dp.get(j)!.set(k, calculateDP(j, k, dp))
            dp.get(k)!.set(j, calculateDP(k, j, dp))
        }

        if (dp.get(k)!.get(k)! > 1 - 1e-5) {
            return 1
        }
    }

    return dp.get(m)!.get(m)!
}

function calculateDP(i: number, j: number, dp: Map<number, Map<number, number>>): number {
    return (
        (getDP(Math.max(0, i - 4), j, dp) +
            getDP(Math.max(0, i - 3), j - 1, dp) +
            getDP(Math.max(0, i - 2), Math.max(0, j - 2), dp) +
            getDP(i - 1, Math.max(0, j - 3), dp)) / 4
    )
}

function getDP(i: number, j: number, dp: Map<number, Map<number, number>>): number {
    return dp.get(i)?.get(j) ?? 0
}
