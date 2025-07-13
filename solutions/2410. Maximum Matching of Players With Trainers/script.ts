export {matchPlayersAndTrainers}

function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
    players.sort((a: number, b: number): number => a - b)
    trainers.sort((a: number, b: number): number => a - b)

    let playerIndex: number = 0
    let trainerIndex: number = 0
    let matches: number = 0

    while (playerIndex < players.length && trainerIndex < trainers.length) {
        if (players[playerIndex] <= trainers[trainerIndex]) {
            matches++
            playerIndex++
        }
        trainerIndex++
    }

    return matches
}
