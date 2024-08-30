import {arrayOf, matrixOf} from "../../common/array-factories"

export {modifiedGraphEdges}

const INF = 2e9

function modifiedGraphEdges(n: number, edges: number[][], source: number, destination: number, target: number): number[][] {
    let graph: number[][][] = matrixOf([], n, n)
    for (const edge of edges) {
        if (edge[2] !== -1) {
            graph[edge[0]].push([edge[1], edge[2]])
            graph[edge[1]].push([edge[0], edge[2]])
        }
    }

    let currentShortestDistance: number = runDijkstra(n, source, destination, graph)
    if (currentShortestDistance < target) {
        return []
    }

    let matchesTarget: boolean = (currentShortestDistance === target)

    for (const edge of edges) {
        edge[2] = matchesTarget ? INF : 1
        graph[edge[0]].push([edge[1], edge[2]])
        graph[edge[1]].push([edge[0], edge[2]])

        if (!matchesTarget) {
            const newDistance: number = runDijkstra(n, source, destination, graph)
            if (newDistance <= target) {
                matchesTarget = true
                edge[2] += target - newDistance
            }
        }
    }

    return matchesTarget ? edges : []
}

function runDijkstra(n: number, source: number, destination: number, graph: number[][][]): number {
    const minDistance: number[] = arrayOf(INF, n)
    const minHeap: [number, number][] = []

    minDistance[source] = 0
    minHeap.push([source, 0])

    while (minHeap.length > 0) {
        const [u, d]: [number, number] = minHeap.shift()!

        if (d > minDistance[u]) continue

        for (const [v, weight] of graph[u]) {
            if (d + weight < minDistance[v]) {
                minDistance[v] = d + weight
                minHeap.push([v, minDistance[v]])
            }
        }
    }

    return minDistance[destination]
}
