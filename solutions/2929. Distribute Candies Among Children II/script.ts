export {distributeCandies}

function distributeCandies(n: number, limit: number): number {
    let ways: number = 0

    for (let candiesChild1: number = 0; candiesChild1 <= Math.min(n, limit); candiesChild1++) {
        const remainingCandies: number = n - candiesChild1

        const minCandiesChild2: number = Math.max(0, remainingCandies - limit)
        const maxCandiesChild2: number = Math.min(limit, remainingCandies)

        if (minCandiesChild2 <= maxCandiesChild2) {
            ways += maxCandiesChild2 - minCandiesChild2 + 1
        }
    }

    return ways
}
