export {numMusicPlaylists}

const mod: number = 1e9 + 7

function numMusicPlaylists(n: number, goal: number, k: number): number {
    const playlists: number[][] = combine(goal, n)

    return playlists
        .filter((playlist: number[]): boolean => legal(playlist, k, n))
        .length % mod
}

function legal(playlist: number[], repeatAllowedAfter: number, n: number): boolean {
    if (new Set(playlist).size !== n) {
        return false
    }

    const map: Map<number, number> = new Map<number, number>()
    for (let currentPlay: number = 0; currentPlay < playlist.length; currentPlay++) {
        const songId: number = playlist[currentPlay]
        const sinceLastPlay: number | undefined = map.get(songId)

        if (sinceLastPlay !== undefined) {
            if (currentPlay - sinceLastPlay <= repeatAllowedAfter) {
                return false
            }
        }

        map.set(songId, currentPlay)
    }

    return true
}

function combine(size: number, options: number): number[][] {
    const result: number[][] = []
    const out: number[] = []

    collectCombinations(Array.from(Array(options).keys()), size, [...out], result)

    return result
}

function collectCombinations(options: number[], size: number, out: number[], result: number[][]): void {
    if (out.length === size) {
        result.push([...out])
        return
    }

    for (const num of options) {
        out.push(num)
        collectCombinations(options, size, [...out], result)
        out.pop()
    }
}
