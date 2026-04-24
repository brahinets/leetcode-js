export { furthestDistanceFromOrigin }

function furthestDistanceFromOrigin(moves: string): number {
    let left: number = 0
    let right: number = 0
    let wildcards: number = 0

    for (const move of moves) {
        if (move === 'L') {
            left++
        } else if (move === 'R') {
            right++
        } else {
            wildcards++
        }
    }

    return Math.abs(left - right) + wildcards
}
