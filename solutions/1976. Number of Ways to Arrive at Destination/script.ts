import {UndirectedWeightedGraph} from "../../common/Graph"
import {PriorityQueue} from "../../common/PriorityQueue"
import {arrayOf, arrayOfZeros} from "../../common/array-factories"

export {countPaths}

const MOD: number = 1e9 + 7

function countPaths(n: number, roads: number[][]): number {
    const graph: UndirectedWeightedGraph = new UndirectedWeightedGraph()
    for (const [u, v, time] of roads) {
        graph.addEdge(u, v, time)
    }

    const minHeap = new PriorityQueue<{ node: number; dist: number }>((a, b) => a.dist - b.dist)
    const dist: number[] = arrayOf(Number.MAX_VALUE, n)
    const ways: number[] = arrayOfZeros(n)

    minHeap.enqueue({node: 0, dist: 0})
    dist[0] = 0
    ways[0] = 1

    while (!minHeap.isEmpty()) {
        const {node: u, dist: d}: { node: number; dist: number } = minHeap.dequeue()!

        if (d > dist[u]) {
            continue
        }

        for (const [v, weight] of graph.getNeighbours(u)) {
            const newDist: number = d + weight

            if (newDist < dist[v]) {
                dist[v] = newDist
                ways[v] = ways[u]
                minHeap.enqueue({node: v, dist: newDist})
            } else if (newDist === dist[v]) {
                ways[v] = (ways[v] + ways[u]) % MOD
            }
        }
    }

    return ways[n - 1]
}
