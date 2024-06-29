import {DirectedUnweightedGraph} from "../../common/Graph"
import {arrayOf} from "../../common/array-factories"

export {getAncestors}

function getAncestors(n: number, edges: number[][]): number[][] {
    const graph: DirectedUnweightedGraph = buildGraph(edges)

    const answer: number[][] = arrayOf([], n)
    for (let node: number = 0; node < n; node++) {
        for (let potentialAncestor: number = 0; potentialAncestor < n; potentialAncestor++) {
            if (node !== potentialAncestor) {
                if (graph.pathExist(potentialAncestor, node)) {
                    answer[node].push(potentialAncestor)
                }
            }
        }
    }

    return answer
}

function buildGraph(edges: number[][]): DirectedUnweightedGraph {
    const graph: DirectedUnweightedGraph = new DirectedUnweightedGraph()

    for (const [from, to] of edges) {
        graph.addEdge(from, to)
    }

    return graph
}
