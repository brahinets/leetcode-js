export {minMoves2}

function minMoves2(numbers: number[]): number {
    const sorted: number[] = [...numbers].sort((first: number, second: number): number => first - second)
    const median: number = sorted[Math.floor(sorted.length / 2)]

    let moves: number = 0

    for (const number of sorted) {
        moves += Math.abs(number - median)
    }

    return moves
}
