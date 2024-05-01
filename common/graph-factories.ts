import {
    DirectedUnweightedGraph,
    DirectedWeightedGraph,
    UndirectedUnweightedGraph,
    UndirectedWeightedGraph
} from "./Graph"

export {
    directedWeightedGraphFromEdges,
    directedUnweightedGraphFromEdges,
    undirectedWeightedGraphFromEdges,
    undirectedUnweightedGraphFromEdges
}

function directedWeightedGraphFromEdges(edges: number[][]): DirectedWeightedGraph {
    const graph: DirectedWeightedGraph = new DirectedWeightedGraph()

    for (const [from, to, weight] of edges) {
        graph.addEdge(from, to, weight)
    }

    return graph
}

function directedUnweightedGraphFromEdges(edges: number[][]): DirectedUnweightedGraph {
    const graph: DirectedUnweightedGraph = new DirectedUnweightedGraph()

    for (const [from, to] of edges) {
        graph.addEdge(from, to)
    }

    return graph
}

function undirectedWeightedGraphFromEdges(edges: number[][]): UndirectedWeightedGraph {
    const graph: UndirectedWeightedGraph = new UndirectedWeightedGraph()

    for (const [from, to, weight] of edges) {
        graph.addEdge(from, to, weight)
    }

    return graph
}

function undirectedUnweightedGraphFromEdges(edges: number[][]): UndirectedUnweightedGraph {
    const graph: UndirectedUnweightedGraph = new UndirectedUnweightedGraph()

    for (const [from, to] of edges) {
        graph.addEdge(from, to)
    }

    return graph
}
