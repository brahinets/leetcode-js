export {findTheWinner}

function findTheWinner(n: number, k: number): number {
    let winner: number = 0

    for (let i: number = 2; i <= n; i++) {
        winner = (winner + k) % i
    }

    return winner + 1
}
