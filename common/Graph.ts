export {DirectedWeightedGraph, DirectedUnweightedGraph, UndirectedWeightedGraph, UndirectedUnweightedGraph}

abstract class Graph {
    protected readonly nodes: Map<number, Map<number, number>>

    constructor() {
        this.nodes = new Map<number, Map<number, number>>()
    }

    addEdge(from: number, to: number, weight: number): void {
        const toNode: Map<number, number> = this.nodes.get(from) ?? new Map<number, number>()
        toNode.set(to, weight)
        this.nodes.set(from, toNode)
    }

    getNeighbours(from: number): Map<number, number> {
        return this.nodes.get(from) ?? new Map<number, number>()
    }
}

class DirectedWeightedGraph extends Graph {
    addEdge(from: number, to: number, weight: number): void {
        super.addEdge(from, to, weight)
    }
}

class DirectedUnweightedGraph extends Graph {
    private readonly WEIGHT: number = 1

    addEdge(from: number, to: number): void {
        super.addEdge(from, to, this.WEIGHT)
    }
}

class UndirectedWeightedGraph extends Graph {
    addEdge(from: number, to: number, weight: number): void {
        super.addEdge(from, to, weight)
        super.addEdge(to, from, weight)
    }
}

class UndirectedUnweightedGraph extends Graph {
    private readonly WEIGHT: number = 1

    addEdge(from: number, to: number): void {
        super.addEdge(to, from, this.WEIGHT)
        super.addEdge(from, to, this.WEIGHT)
    }
}
