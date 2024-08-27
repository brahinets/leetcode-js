import {arrayOfZeros} from "../../common/array-factories"
import {UndirectedWeightedGraph} from "../../common/Graph"

export {maxProbability}

function maxProbability(
    n: number,
    edges: number[][],
    successProb: number[],
    start: number,
    end: number
): number {
    const graph: UndirectedWeightedGraph = new UndirectedWeightedGraph()
    for (let i = 0; i < edges.length; i++) {
        graph.addEdge(edges[i][0], edges[i][1], successProb[i])
    }

    const maxProbability: number[] = arrayOfZeros(n)
    maxProbability[start] = 1

    const queue: number[] = []
    queue.push(start)

    while (queue.length > 0) {
        const currentNode: number = queue.shift()!

        for (const [nextNode, pathProbability] of graph.getNeighbours(currentNode)) {
            if (maxProbability[currentNode] * pathProbability > maxProbability[nextNode]) {
                maxProbability[nextNode] = maxProbability[currentNode] * pathProbability
                queue.push(nextNode)
            }
        }
    }

    return maxProbability[end]
}
