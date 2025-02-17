export {numTilePossibilities}

function numTilePossibilities(tiles: string): number {
    const freq: Map<string, number> = new Map<string, number>()

    for (const tile of tiles) {
        freq.set(tile, (freq.get(tile) || 0) + 1)
    }

    return dfs(freq)
}

function dfs(freq: Map<string, number>): number {
    let sum: number = 0
    for (const [key, value] of freq) {
        if (value === 0) {
            continue
        }

        freq.set(key, value - 1)
        sum += 1 + dfs(freq)
        freq.set(key, value)
    }

    return sum
}
