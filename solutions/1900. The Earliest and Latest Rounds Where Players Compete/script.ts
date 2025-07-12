export {earliestAndLatest}

type PlayerId = number

type RoundResult = [number, number]

const memo: Map<string, RoundResult> = new Map<string, RoundResult>()

function earliestAndLatest(n: number, firstPlayer: PlayerId, secondPlayer: PlayerId): RoundResult {
    if (firstPlayer > secondPlayer) {
        [firstPlayer, secondPlayer] = [secondPlayer, firstPlayer]
    }

    memo.clear()

    return dfs(Array.from({length: n}, (_: number, i: number): number => i + 1), 1, firstPlayer, secondPlayer)
}

function backtrack(
    players: PlayerId[],
    firstPlayer: PlayerId,
    secondPlayer: PlayerId,
    idx: number,
    arr: PlayerId[],
    nextRounds: PlayerId[][]
): void {
    if (idx >= Math.floor(players.length / 2)) {
        if (players.length % 2 === 1) {
            arr.push(players[Math.floor(players.length / 2)])
        }

        nextRounds.push([...arr])

        if (players.length % 2 === 1) {
            arr.pop()
        }

        return
    }

    const a: number = players[idx]
    const b: number = players[players.length - 1 - idx]

    if (a === firstPlayer || a === secondPlayer) {
        arr.push(a)
        backtrack(players, firstPlayer, secondPlayer, idx + 1, arr, nextRounds)
        arr.pop()
    } else if (b === firstPlayer || b === secondPlayer) {
        arr.push(b)
        backtrack(players, firstPlayer, secondPlayer, idx + 1, arr, nextRounds)
        arr.pop()
    } else {
        arr.push(a)
        backtrack(players, firstPlayer, secondPlayer, idx + 1, arr, nextRounds)
        arr.pop()
        arr.push(b)
        backtrack(players, firstPlayer, secondPlayer, idx + 1, arr, nextRounds)
        arr.pop()
    }
}

function dfs(players: PlayerId[], round: number, firstPlayer: PlayerId, secondPlayer: PlayerId): RoundResult {
    const key: string = players.join(',') + ':' + round
    if (memo.has(key)) {
        return memo.get(key)!
    }

    let i: number = 0
    let j: number = players.length - 1
    let earliest: number = Infinity
    let latest: number = -Infinity
    let found: boolean = false

    while (i < j) {
        const a: number = players[i], b = players[j]

        if ((a === firstPlayer && b === secondPlayer) || (a === secondPlayer && b === firstPlayer)) {
            earliest = Math.min(earliest, round)
            latest = Math.max(latest, round)
            found = true
        }

        i++
        j--
    }
    if (found) {
        return [earliest, latest]
    }

    const nextRounds: PlayerId[][] = []

    backtrack(players, firstPlayer, secondPlayer, 0, [], nextRounds)

    for (const next of nextRounds) {
        next.sort((x: number, y: number): number => x - y)

        const [e, l]: [number, number] = dfs(next, round + 1, firstPlayer, secondPlayer)
        earliest = Math.min(earliest, e)
        latest = Math.max(latest, l)
    }

    memo.set(key, [earliest, latest])

    return [earliest, latest]
}
