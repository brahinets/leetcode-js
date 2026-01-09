import {UndirectedUnweightedGraph} from "../../common/Graph"
import {matrixOf} from "../../common/array-factories"

export {secondMinimum}

function secondMinimum(n: number, edges: number[][], time: number, change: number): number {
    const graph: UndirectedUnweightedGraph = createGraph(edges)

    const dist: number[][] = matrixOf(Number.MAX_SAFE_INTEGER, n + 1, 2)
    const pq: [number, number][] = [[0, 1]]
    dist[1][0] = 0

    while (pq.length) {
        const [currentTime, u]: [number, number] = pq.shift()!
        if (u === n && dist[n][1] !== Number.MAX_SAFE_INTEGER) {
            return dist[n][1]
        }

        for (const v of graph.getNeighbours(u).keys()) {
            let nextTime: number = currentTime
            if (nextTime % (2 * change) >= change) {
                nextTime = Math.ceil(nextTime / (2 * change)) * (2 * change)
            }

            nextTime += time

            if (nextTime < dist[v][0]) {
                dist[v][1] = dist[v][0]
                dist[v][0] = nextTime
                insertSorted(pq, [nextTime, v])
            } else if (nextTime > dist[v][0] && nextTime < dist[v][1]) {
                dist[v][1] = nextTime
                insertSorted(pq, [nextTime, v])
            }
        }
    }

    return dist[n][1] === Number.MAX_SAFE_INTEGER ? -1 : dist[n][1]
}

function createGraph(edges: number[][]): UndirectedUnweightedGraph {
    const graph = new UndirectedUnweightedGraph()

    for (const [u, v] of edges) {
        graph.addEdge(u, v)
    }

    return graph
}

function insertSorted(arr: [number, number][], element: [number, number]): void {
    const index: number = arr.findIndex(([time]: number[]): boolean => time > element[0])

    if (index === -1) {
        arr.push(element)
    } else {
        arr.splice(index, 0, element)
    }
}
