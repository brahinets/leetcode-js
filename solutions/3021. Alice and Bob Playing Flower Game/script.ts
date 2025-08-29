export {flowerGame}

function flowerGame(n: number, m: number): number {
    const oddAlice: number = Math.floor((n + 1) / 2)
    const evenAlice: number = Math.floor(n / 2)
    const oddBob: number = Math.floor((m + 1) / 2)
    const evenBob: number = Math.floor(m / 2)

    return oddAlice * evenBob + evenAlice * oddBob
}
