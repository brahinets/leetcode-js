import {TreeNode} from "../../common/TreeNode"
import {arrayOfZeros} from "../../common/array-factories";

export {findMinHeightTrees, TreeNode}

function findMinHeightTrees(n: number, edges: number[][]): number[] {
    let graph: UndirectedGraph = new UndirectedGraph(n, edges)
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

            for (const node of graph.nodes.get(current)!.values()) {
                depth[node]--

                let leaf: boolean = depth[node] == 1
                if (leaf) {
                    queue.push(node)
                }
            }

        }
    }

    return queue.slice(front)
}

class UndirectedGraph {
    readonly size: number
    readonly nodes: Map<number, Map<number, number>>

    constructor(n: number, edges: number[][]) {
        this.size = n
        this.nodes = new Map<number, Map<number, number>>()
        edges.forEach((edge: number[]): void => this.addEdge(edge))
    }

    addEdge(edge: number[]): void {
        const [from, to] = edge

        const toNode: Map<number, number> = this.nodes.get(from) ?? new Map<number, number>()
        toNode.set(to, 1)
        this.nodes.set(from, toNode)

        const otherNode: Map<number, number> = this.nodes.get(to) ?? new Map<number, number>()
        otherNode.set(from, 1)
        this.nodes.set(to, otherNode)
    }
}
