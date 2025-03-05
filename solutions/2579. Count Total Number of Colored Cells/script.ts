export {coloredCells}

function coloredCells(n: number): number {
    let numBlueCells: number = 1
    let addend: number = 4

    while (--n > 0) {
        numBlueCells += addend
        addend += 4
    }

    return numBlueCells
}
