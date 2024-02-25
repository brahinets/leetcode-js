export {canTraverseAllPairs}

function canTraverseAllPairs(nums: number[]): boolean {
    const graph: Graph = buildGraph(nums)
    const visited: Set<number> = traverse(graph, 0, new Set<number>())

    return visited.size === nums.length
}

function buildGraph(nums: number[]): Graph {
    const graph: Graph = new Graph()

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            const gcdValue: number = gcd(nums[i], nums[j])

            if (gcdValue > 1) {
                graph.addEdge(i, j)
                graph.addEdge(j, i)
            }
        }
    }

    return graph
}

function gcd(a: number, b: number): number {
    if (b === 0) {
        return a
    }

    return gcd(b, a % b)
}

function traverse(graph: Graph, node: number, visited: Set<number>): Set<number> {
    visited.add(node)

    for (const neighbor of graph.getNeighbours(node)) {
        if (!visited.has(neighbor)) {
            traverse(graph, neighbor, visited)
        }
    }

    return visited
}

class Graph {
    private readonly nodes: Map<number, Set<number>>

    constructor() {
        this.nodes = new Map<number, Set<number>>()
    }

    addEdge(from: number, to: number): void {
        if (!this.nodes.has(from)) {
            this.nodes.set(from, new Set<number>())
        }

        this.nodes.get(from)!.add(to)
    }

    getNeighbours(node: number): Set<number> {
        return this.nodes.get(node) ?? new Set<number>()
    }
}
