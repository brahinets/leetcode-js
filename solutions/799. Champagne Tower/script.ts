export {champagneTower}

function champagneTower(poured: number, query_row: number, query_glass: number): number {
    const tower: number[][] = Array.from({length: query_row + 1}, (_, i) => new Array(i + 1).fill(0))
    tower[0][0] = poured

    for (let row: number = 0; row < query_row; row++) {
        for (let glass: number = 0; glass <= row; glass++) {
            const overflow: number = tower[row][glass] - 1

            if (overflow > 0) {
                tower[row][glass] = 1
                tower[row + 1][glass] += overflow / 2
                tower[row + 1][glass + 1] += overflow / 2
            }
        }
    }

    return Math.min(1, tower[query_row][query_glass])
}
