export {calcEquation}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph: DirectedWeightedGraph = buildGraph(equations, values)

    return queries.map(([start, end]: string[]): number =>
        Number(
            dfs(code(start), code(end), new Set<number>(), graph).toFixed(5)
        )
    )
}

function buildGraph(equations: string[][], values: number[]): DirectedWeightedGraph {
    const graph: DirectedWeightedGraph = new DirectedWeightedGraph()

    for (let i: number = 0; i < equations.length; i++) {
        const [a, b]: string[] = equations[i]
        const value: number = values[i]

        graph.addEdge(code(a), code(b), value)
        graph.addEdge(code(b), code(a), 1 / value)
    }

    return graph
}

function code(node: string): number {
    let radix: number = 1
    let result: number = 0

    for (let i: number = 0; i < node.length; i++) {
        result += radix * node.charCodeAt(i)
        radix *= 100
    }

    return result
}

function dfs(current: number, target: number, visited: Set<number>, graph: DirectedWeightedGraph): number {
    if (!graph.hasNode(current) || !graph.hasNode(target)) {
        return -1
    }

    if (current === target) {
        return 1
    }

    visited.add(current)

    const neighbours: Map<number, number> = graph.getNeighbours(current)
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
    private nodes: Map<number, Map<number, number>>

    constructor() {
        this.nodes = new Map<number, Map<number, number>>()
    }

    addEdge(from: number, to: number, weight: number): void {
        if (!this.nodes.has(from)) {
            this.nodes.set(from, new Map<number, number>())
        }
        this.nodes.get(from)?.set(to, weight)
    }

    getNeighbours(node: number): Map<number, number> {
        return this.nodes.get(node) ?? new Map<number, number>()
    }

    hasNode(node: number): boolean {
        return this.nodes.has(node)
    }
}
