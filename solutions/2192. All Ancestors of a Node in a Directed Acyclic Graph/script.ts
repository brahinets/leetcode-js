import {DirectedUnweightedGraph} from "../../common/Graph"
import {arrayOf} from "../../common/array-factories"

export {getAncestors}

function getAncestors(n: number, edges: number[][]): number[][] {
    const transposedGraph: DirectedUnweightedGraph = buildTransposedGraph(edges)

    const answer: number[][] = arrayOf([], n)
    for (let node: number = 0; node < n; node++) {
        answer[node] = collectAncestors(transposedGraph, node, node, arrayOf(false, n))
            .sort((a: number, b: number): number => a - b)
    }

    return answer
}

function collectAncestors(
    graph: DirectedUnweightedGraph,
    current: number,
    original: number,
    visited: boolean[]
): number[] {
    visited[current] = true

    let ancestors: number[] = []
    if (current !== original) {
        ancestors.push(current)
    }

    for (const [neighbor] of graph.getNeighbours(current)) {
        if (!visited[neighbor]) {
            ancestors = ancestors.concat(collectAncestors(graph, neighbor, original, visited))
        }
    }

    return ancestors
}

function buildTransposedGraph(edges: number[][]): DirectedUnweightedGraph {
    const graph: DirectedUnweightedGraph = new DirectedUnweightedGraph()

    for (const [from, to] of edges) {
        graph.addEdge(to, from)
    }

    return graph
}
