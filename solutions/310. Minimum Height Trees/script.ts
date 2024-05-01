import {TreeNode} from "../../common/TreeNode"
import {arrayOfZeros} from "../../common/array-factories"
import {undirectedUnweightedGraphFromEdges} from "../../common/graph-factories"
import {UndirectedUnweightedGraph} from "../../common/Graph"

export {findMinHeightTrees, TreeNode}

function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (edges.length == 0) {
        return [0]
    }

    let graph: UndirectedUnweightedGraph = undirectedUnweightedGraphFromEdges(edges)
    let depth: number[] = arrayOfZeros(n)
    for (const [from, to] of edges) {
        depth[from]++
        depth[to]++
    }

    const queue: number[] = []
    let front: number = 0

    for (let i: number = 0; i < n; i++) {
        if (depth[i] == 1) {
            queue.push(i)
        }
    }

    while (n > 2) {
        const pop: number = queue.length - front
        n -= pop

        for (let i: number = 0; i < pop; i++) {
            const current: number = queue[front++]

            for (const neighbour of graph.getNeighbours(current).keys()) {
                depth[neighbour]--

                let leaf: boolean = depth[neighbour] == 1
                if (leaf) {
                    queue.push(neighbour)
                }
            }

        }
    }

    return queue.slice(front)
}
