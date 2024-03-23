export {canTraverseAllPairs}

function canTraverseAllPairs(nums: number[]): boolean {
    const graph: Graph = buildGraph(nums)
    const visited: Set<number> = traverse(graph, 0, new Set<number>())

    return visited.size === nums.length
}

function buildGraph(nums: number[]): Graph {
    const graph: Graph = new Graph()

    const memo: Map<number, number> = new Map<number, number>()
    for (let node: number = 0; node < nums.length; node++) {
        const factors: number[] = getPrimeFactors(nums[node])
        for (const factor of factors) {
            if (memo.has(factor)) {
                const to: number = memo.get(factor)!
                graph.addEdge(to, node)
                graph.addEdge(node, to)
            }

            memo.set(factor, node)
        }
    }

    return graph
}

function getPrimeFactors(num: number): number[] {
    const factors: Set<number> = new Set<number>()

    for (let i: number = 2; i * i <= num; i++) {
        while (num % i === 0) {
            factors.add(i)
            num /= i
        }
    }

    if (num > 1) {
        factors.add(num)
    }

    return [...factors]
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
