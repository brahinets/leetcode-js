export { minSwaps }

function minSwaps(grid: number[][]): number {
    const n: number = grid.length

    const trailingZeros: number[] = grid.map((row: number[]): number => {
        let zeros: number = 0

        for (let j: number = n - 1; j >= 0 && row[j] === 0; j--) {
            zeros++
        }

        return zeros
    })

    let swaps: number = 0

    for (let i: number = 0; i < n; i++) {
        const needed: number = n - 1 - i

        let j: number = i
        while (j < n && trailingZeros[j] < needed) {
            j++
        }

        if (j === n) {
            return -1
        }

        while (j > i) {
            [trailingZeros[j], trailingZeros[j - 1]] = [trailingZeros[j - 1], trailingZeros[j]]
            swaps++
            j--
        }
    }

    return swaps
}
