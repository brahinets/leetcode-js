import {matrixOf} from "../../common/array-utils"

export {numMusicPlaylists}

const mod: number = 1e9 + 7
const no_value: number = -1

function numMusicPlaylists(n: number, goal: number, k: number): number {
    const playlistsOfLengthOfSongs: number[][] = matrixOf(no_value, goal + 1, n + 1)

    countPlaylists(goal, n, k, n, playlistsOfLengthOfSongs)

    return playlistsOfLengthOfSongs[goal][n]
}

function countPlaylists(
    goalSongs: number,
    uniqueSongs: number,
    minBeforeRepeat: number,
    among: number,
    playlists: number[][]
): number {
    if (goalSongs === 0 && uniqueSongs === 0) {
        return 1
    }

    if (goalSongs === 0 || uniqueSongs === 0) {
        return 0
    }

    if (playlists[goalSongs][uniqueSongs] !== no_value) {
        return playlists[goalSongs][uniqueSongs]
    }

    const songsAvailable: number = among - uniqueSongs + 1
    playlists[goalSongs][uniqueSongs] = (countPlaylists(goalSongs - 1, uniqueSongs - 1, minBeforeRepeat, among, playlists) * songsAvailable) % mod

    if (uniqueSongs > minBeforeRepeat) {
        playlists[goalSongs][uniqueSongs] += (countPlaylists(goalSongs - 1, uniqueSongs, minBeforeRepeat, among, playlists) * (uniqueSongs - minBeforeRepeat)) % mod
        playlists[goalSongs][uniqueSongs] %= mod
    }

    return playlists[goalSongs][uniqueSongs]
}
