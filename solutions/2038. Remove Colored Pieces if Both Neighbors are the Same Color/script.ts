export {winnerOfGame}

function winnerOfGame(colors: string): boolean {
    let countA: number = 0
    let countB: number = 0

    let i: number = 0
    while (i < colors.length) {
        const x: string = colors[i]
        let count: number = 0

        while (i < colors.length && colors[i] === x) {
            i++
            count++
        }

        if (x === 'A') {
            countA += Math.max(count - 2, 0)
        } else if (x === 'B') {
            countB += Math.max(count - 2, 0)
        }
    }

    return countA > countB
}
