export { judgeCircle }

function judgeCircle(moves: string): boolean {
    let horizontal: number = 0
    let vertical: number = 0

    for (const move of moves) {
        if (move === 'L') {
            horizontal--
        } else if (move === 'R') {
            horizontal++
        } else if (move === 'U') {
            vertical++
        } else {
            vertical--
        }
    }

    return horizontal === 0 && vertical === 0
}
