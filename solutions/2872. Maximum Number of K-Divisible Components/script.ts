import {UndirectedUnweightedGraph} from "../../common/Graph"

export {maxKDivisibleComponents}

function maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
    const graph: UndirectedUnweightedGraph = new UndirectedUnweightedGraph()
    for (const [a, b] of edges) {
        graph.addEdge(a, b)
    }

    const [, totalComponents]: [number, number] = dfs(0, -1, graph, values, k)

    return totalComponents + 1
}

function dfs(
    node: number,
    parent: number,
    graph: UndirectedUnweightedGraph,
    values: number[],
    k: number
): [number, number] {
    let subtreeSum: number = values[node]
    let components: number = 0

    for (const [neighbor] of graph.getNeighbours(node)) {
        if (neighbor !== parent) {
            const [childSum, childComponents]: [number, number] = dfs(neighbor, node, graph, values, k)

            if (childSum % k === 0) {
                components += 1
            } else {
                subtreeSum += childSum
            }

            components += childComponents
        }
    }

    return [subtreeSum, components]
}
