import {arrayOfZeros} from "../../common/array-factories"
import {UndirectedUnweightedGraph} from "../../common/Graph"
import {undirectedUnweightedGraphFromEdges} from "../../common/graph-factories"

export {sumOfDistancesInTree}

function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    const graph: UndirectedUnweightedGraph = undirectedUnweightedGraphFromEdges(edges)
    const result: number[] = arrayOfZeros(n)
    const subtreeSizes: number[] = arrayOfZeros(n)

    const dfs1 = (node: number, parent: number): void => {
        subtreeSizes[node] = 1
        for (const neighbor of graph.getNeighbours(node).keys()) {
            if (neighbor !== parent) {
                dfs1(neighbor, node)
                subtreeSizes[node] += subtreeSizes[neighbor]
                result[0] += subtreeSizes[neighbor]
            }
        }
    }

    const dfs2 = (node: number, parent: number): void => {
        for (const neighbor of graph.getNeighbours(node).keys()) {
            if (neighbor !== parent) {
                result[neighbor] = result[node] + (n - subtreeSizes[neighbor]) - subtreeSizes[neighbor]
                dfs2(neighbor, node)
            }
        }
    }

    dfs1(0, -1)
    dfs2(0, -1)

    return result
}
