import {DisjointSetUnion} from "../../common/DisjointSetUnion"
import {arrayOf, arrayOfZeros} from "../../common/array-factories"

export {processQueries}

function processQueries(
    c: number,
    connections: number[][],
    queries: number[][],
): number[] {
    const dsu: DisjointSetUnion = new DisjointSetUnion(c + 1)
    connections.forEach(([u, v]: number[]): void => {
        dsu.union(u, v)
    })

    const online: boolean[] = arrayOf(true, c + 1)
    const offlineCounts: number[] = arrayOfZeros(c + 1)
    const minimumOnlineStations = new Map<number, number>()

    for (const [op, x] of queries) {
        if (op === 2) {
            online[x] = false
            offlineCounts[x] += 1
        }
    }

    for (let i: number = 1; i <= c; i++) {
        const root: number = dsu.find(i)
        if (!minimumOnlineStations.has(root)) {
            minimumOnlineStations.set(root, -1)
        }

        const station: number = minimumOnlineStations.get(root)!
        if (online[i]) {
            if (station === -1 || station > i) {
                minimumOnlineStations.set(root, i)
            }
        }
    }

    const result: number[] = []
    for (const [op, x] of queries.reverse()) {
        const root: number = dsu.find(x)
        const station: number = minimumOnlineStations.get(root)!

        if (op === 1) {
            if (online[x]) {
                result.push(x)
            } else {
                result.push(station)
            }
        }

        if (op === 2) {
            if (offlineCounts[x] > 1) {
                offlineCounts[x] -= 1
            } else {
                online[x] = true
                if (station === -1 || station > x) {
                    minimumOnlineStations.set(root, x)
                }
            }
        }
    }

    return result.reverse()
}
