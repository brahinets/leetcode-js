import {arrayOf} from "../../common/array-factories"
import {UndirectedWeightedGraph} from "../../common/Graph";

export {modifiedGraphEdges}

const BIG = 2e9

function modifiedGraphEdges(n: number, edges: number[][], source: number, destination: number, target: number): number[][] {
    const graph: UndirectedWeightedGraph = buildGraph(edges)

    const currentShortestDistance: number = runDijkstra(n, source, destination, graph)
    if (currentShortestDistance < target) {
        return []
    }
    let matchesTarget: boolean = (currentShortestDistance === target)

    for (const edge of edges) {
        if (edge[2] !== -1) {
            continue
        }

        edge[2] = matchesTarget ? BIG : 1
        graph.addEdge(edge[0], edge[1], edge[2])

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

function runDijkstra(n: number, source: number, destination: number, graph: UndirectedWeightedGraph): number {
    const minDistance: number[] = arrayOf(BIG, n)
    const minHeap: [number, number][] = []

    minDistance[source] = 0
    minHeap.push([source, 0])

    while (minHeap.length > 0) {
        const [u, d]: [number, number] = minHeap.shift()!

        if (d > minDistance[u]) {
            continue
        }

        for (const [v, weight] of graph.getNeighbours(u)) {
            if (d + weight < minDistance[v]) {
                minDistance[v] = d + weight
                minHeap.push([v, minDistance[v]])
            }
        }
    }

    return minDistance[destination]
}

function buildGraph(edges: number[][]) {
    const graph: UndirectedWeightedGraph = new UndirectedWeightedGraph()

    for (const edge of edges) {
        if (edge[2] !== -1) {
            graph.addEdge(edge[0], edge[1], edge[2])
        }
    }

    return graph
}
