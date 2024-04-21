export {validPath}

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const graph: UndirectedGraph = new UndirectedGraph(n, edges)

    return graph.pathExist(source, destination)
}

class UndirectedGraph {
    private readonly size: number
    private readonly nodes: Map<number, Map<number, number>>

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

    pathExist(from: number, to: number): boolean {
        const visited: Set<number> = new Set<number>()

        const dfs: (current: number) => boolean = (current: number): boolean => {
            if (current === to) {
                return true
            }

            visited.add(current)
            const neighbors: Map<number, number> = this.nodes.get(current) ?? new Map<number, number>()
            for (const neighbor of neighbors.keys()) {
                if (!visited.has(neighbor) && dfs(neighbor)) {
                    return true
                }
            }

            return false
        }

        return dfs(from)
    }
}
