import {arrayOfZeros} from "../../common/array-factories"

export {sumOfDistancesInTree}

function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    const graph: UndirectedUnweightedGraph = new UndirectedUnweightedGraph(n, edges)
    const result: number[] = arrayOfZeros(n)
    const subtreeSizes: number[] = arrayOfZeros(n)

    const dfs1 = (node: number, parent: number): void => {
        subtreeSizes[node] = 1
        for (const neighbor of graph.getNeighbors(node)) {
            if (neighbor !== parent) {
                dfs1(neighbor, node)
                subtreeSizes[node] += subtreeSizes[neighbor]
                result[0] += subtreeSizes[neighbor]
            }
        }
    }

    const dfs2 = (node: number, parent: number): void => {
        for (const neighbor of graph.getNeighbors(node)) {
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

class UndirectedUnweightedGraph {
    readonly nodes: Map<number, Set<number>>

    constructor(n: number, edges: number[][]) {
        this.nodes = new Map<number, Set<number>>()
        for (const [a, b] of edges) {
            this.addEdge(a, b)
        }
    }

    addEdge(from: number, to: number): void {
        if (!this.nodes.has(from)) {
            this.nodes.set(from, new Set<number>())
        }
        this.nodes.get(from)!.add(to)

        if (!this.nodes.has(to)) {
            this.nodes.set(to, new Set<number>())
        }
        this.nodes.get(to)!.add(from)
    }

    getNeighbors(node: number): Set<number> {
        return this.nodes.get(node) ?? new Set<number>()
    }
}
