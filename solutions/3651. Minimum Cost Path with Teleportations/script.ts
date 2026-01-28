import { matrixOf, arrayOfZeros } from '../../common/array-factories'

export { minCost }

type State = [number, number, number, number]

interface Cell {
    i: number
    j: number
    val: number
}

function minCost(grid: number[][], k: number): number {
    const m: number = grid.length
    const n: number = grid[0].length
    const INF: number = Number.POSITIVE_INFINITY

    const cells: Cell[] = []

    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < n; j++) {
            cells.push({ i, j, val: grid[i][j] })
        }
    }

    cells.sort((a: Cell, b: Cell): number => a.val - b.val)

    const dist: number[][][] = Array.from(
        { length: k + 1 },
        (): number[][] => matrixOf(INF, m, n)
    )
    dist[0][0][0] = 0

    const teleportedUpTo: number[] = arrayOfZeros(k + 1)

    const pq: State[] = [[0, 0, 0, 0]]

    while (pq.length > 0) {
        const cur: State | undefined = heapPop(pq)

        if (cur === undefined) {
            break
        }

        const [cost, i, j, t]: State = cur

        if (cost > dist[t][i][j]) {
            continue
        }

        if (i === m - 1 && j === n - 1) {
            return cost
        }

        if (j + 1 < n) {
            const nc: number = cost + grid[i][j + 1]

            if (nc < dist[t][i][j + 1]) {
                dist[t][i][j + 1] = nc
                heapPush(pq, [nc, i, j + 1, t])
            }
        }

        if (i + 1 < m) {
            const nc: number = cost + grid[i + 1][j]

            if (nc < dist[t][i + 1][j]) {
                dist[t][i + 1][j] = nc
                heapPush(pq, [nc, i + 1, j, t])
            }
        }

        if (t < k) {
            const curVal: number = grid[i][j]
            const limit: number = upperBound(cells, curVal)
            const start: number = teleportedUpTo[t + 1]

            if (limit > start) {
                teleportedUpTo[t + 1] = limit

                for (let idx: number = start; idx < limit; idx++) {
                    const cell: Cell = cells[idx]

                    if (cost < dist[t + 1][cell.i][cell.j]) {
                        dist[t + 1][cell.i][cell.j] = cost
                        heapPush(pq, [cost, cell.i, cell.j, t + 1])
                    }
                }
            }
        }
    }

    let ans: number = INF

    for (let t: number = 0; t <= k; t++) {
        ans = Math.min(ans, dist[t][m - 1][n - 1])
    }

    return ans
}

function upperBound(cells: Cell[], val: number): number {
    let lo: number = 0
    let hi: number = cells.length

    while (lo < hi) {
        const mid: number = (lo + hi) >> 1

        if (cells[mid].val <= val) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }

    return lo
}

function heapPush(pq: State[], state: State): void {
    pq.push(state)

    let idx: number = pq.length - 1

    while (idx > 0) {
        const parent: number = (idx - 1) >> 1

        if (pq[parent][0] <= pq[idx][0]) {
            break
        }

        const tmp: State = pq[parent]
        pq[parent] = pq[idx]
        pq[idx] = tmp
        idx = parent
    }
}

function heapPop(pq: State[]): State | undefined {
    if (pq.length === 0) {
        return undefined
    }

    const top: State = pq[0]
    const last: State = pq.pop() as State

    if (pq.length > 0) {
        pq[0] = last

        let idx: number = 0

        while (true) {
            const left: number = 2 * idx + 1
            const right: number = 2 * idx + 2
            let smallest: number = idx

            if (left < pq.length && pq[left][0] < pq[smallest][0]) {
                smallest = left
            }

            if (right < pq.length && pq[right][0] < pq[smallest][0]) {
                smallest = right
            }

            if (smallest === idx) {
                break
            }

            const tmp: State = pq[idx]
            pq[idx] = pq[smallest]
            pq[smallest] = tmp
            idx = smallest
        }
    }

    return top
}
