export {findWinners}

function findWinners(matches: number[][]): number[][] {
    const games: Map<number, Set<number>> = collectLoses(matches)

    const strongPlayers: number[] = []
    const weakPlayers: number[] = []
    for (const [player, loses] of games.entries()) {
        if (loses.size === 0) {
            strongPlayers.push(player)
        }

        if (loses.size === 1) {
            weakPlayers.push(player)
        }
    }

    return [sort(strongPlayers), sort(weakPlayers)]
}

function collectLoses(matches: number[][]): Map<number, Set<number>> {
    const players: Map<number, Set<number>> = new Map<number, Set<number>>()

    for (const match of matches) {
        const winner: number = match[0]
        const loser: number = match[1]

        if (!players.has(winner)) {
            players.set(winner, new Set<number>())
        }

        if (!players.has(loser)) {
            players.set(loser, new Set<number>())
        }
        players.get(loser)!.add(winner)
    }

    return players
}

function sort(players: number[]): number[] {
    return players.sort((a: number, b: number): number => a - b)
}
