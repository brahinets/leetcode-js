import {UndirectedUnweightedGraph} from "../../common/Graph"

export {validPath}

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const graph: UndirectedUnweightedGraph = new UndirectedUnweightedGraph()
    for (const [a, b] of edges) {
        graph.addEdge(a, b)
    }

    return graph.pathExist(source, destination)
}

