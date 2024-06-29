import {DirectedUnweightedGraph} from "../../common/Graph"
import {arrayOf} from "../../common/array-factories"

export {getAncestors}

function getAncestors(n: number, edges: number[][]): number[][] {
    const graph: DirectedUnweightedGraph = buildGraph(edges)

    const answer: number[][] = arrayOf([], n)
    for (let source: number = 0; source < n; source++) {
        for (let target: number = 0; target < n; target++) {
            if (source !== target) {
                if (graph.pathExist(target, source)) {
                    answer[source].push(target)
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
