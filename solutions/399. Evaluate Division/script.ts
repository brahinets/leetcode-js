export {calcEquation}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph: DirectedWeightedGraph = buildGraph(equations, values)

    return queries.map(([start, end]: string[]): number => dfs(start, end, new Set<string>(), graph))
}

function buildGraph(equations: string[][], values: number[]): DirectedWeightedGraph {
    const graph: DirectedWeightedGraph = new DirectedWeightedGraph()

    for (let i: number = 0; i < equations.length; i++) {
        const [a, b]: string[] = equations[i]
        const value: number = values[i]

        graph.addEdge(a, b, value)
        graph.addEdge(b, a, 1 / value)
    }

    return graph
}

function dfs(current: string, target: string, visited: Set<string>, graph: DirectedWeightedGraph): number {
    if (!graph.hasNode(current) || !graph.hasNode(target)) {
        return -1
    }

    if (current === target) {
        return 1
    }

    visited.add(current)

    const neighbours: Map<string, number> = graph.getNeighbours(current)
    for (const [neighbor, weight] of neighbours) {
        if (!visited.has(neighbor)) {
            const result: number = dfs(neighbor, target, visited, graph)

            if (result > 0) {
                return weight * result
            }
        }
    }

    return -1
}


class DirectedWeightedGraph {
    private nodes: Map<string, Map<string, number>>

    constructor() {
        this.nodes = new Map<string, Map<string, number>>()
    }

    addEdge(from: string, to: string, weight: number): void {
        if (!this.nodes.has(from)) {
            this.nodes.set(from, new Map<string, number>())
        }
        this.nodes.get(from)?.set(to, weight)
    }

    getNeighbours(node: string): Map<string, number> {
        return this.nodes.get(node) ?? new Map<string, number>()
    }

    hasNode(node: string): boolean {
        return this.nodes.has(node)
    }
}
