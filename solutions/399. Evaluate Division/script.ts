import {DirectedWeightedGraph} from "../../common/Graph"

export {calcEquation}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph: DirectedWeightedGraph = buildGraph(equations, values)

    return queries.map(([start, end]: string[]): number =>
        Number(
            graph.dfs(code(start), code(end), new Set<number>).toFixed(5)
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
