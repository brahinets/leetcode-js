export {DirectedWeightedGraph, DirectedUnweightedGraph, UndirectedWeightedGraph, UndirectedUnweightedGraph}

abstract class Graph {
    protected readonly nodes: Map<number, Map<number, number>>

    constructor() {
        this.nodes = new Map<number, Map<number, number>>()
    }

    abstract addEdge(from: number, to: number, weight: number): void

    getNeighbours(from: number): Map<number, number> {
        return this.nodes.get(from) ?? new Map<number, number>()
    }
}

class DirectedWeightedGraph extends Graph {
    addEdge(from: number, to: number, weight: number): void {
        const toNode: Map<number, number> = this.nodes.get(from) ?? new Map<number, number>()

        toNode.set(to, weight)

        this.nodes.set(from, toNode)
    }
}

class DirectedUnweightedGraph extends DirectedWeightedGraph {
    private readonly WEIGHT: number = 1

    addEdge(from: number, to: number): void {
        super.addEdge(from, to, this.WEIGHT)
    }
}

class UndirectedWeightedGraph extends DirectedWeightedGraph {
    addEdge(from: number, to: number, weight: number): void {
        super.addEdge(from, to, weight)
        super.addEdge(to, from, weight)
    }
}

class UndirectedUnweightedGraph extends DirectedUnweightedGraph {
    addEdge(from: number, to: number): void {
        super.addEdge(to, from)
        super.addEdge(from, to)
    }
}
