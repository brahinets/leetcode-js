import {UndirectedUnweightedGraph} from "../../common/Graph"
import {arrayOf} from "../../common/array-factories"

export {countCompleteComponents}

function countCompleteComponents(n: number, edges: number[][]): number {
    const graph: UndirectedUnweightedGraph = new UndirectedUnweightedGraph()
    for (const [from, to] of edges) {
        graph.addEdge(from, to)
    }

    let count: number = 0
    const visited: boolean[] = arrayOf(false, n)

    for (let i: number = 0; i < n; i++) {
        if (!visited[i]) {
            const component: number[] = []

            dfs(visited, graph, i, component)

            if (isCompleteComponent(graph, component)) {
                count++
            }
        }
    }

    return count
}


function dfs(visited: boolean[], graph:UndirectedUnweightedGraph, node: number, component: number[]): void {
    visited[node] = true
    component.push(node)

    for (const [neighbor,] of graph.getNeighbours(node)) {
        if (!visited[neighbor]) {
            dfs(visited, graph, neighbor, component)
        }
    }
}

function isCompleteComponent(graph: UndirectedUnweightedGraph, component: number[]): boolean {
    const size: number = component.length

    for (const node of component) {
        if (graph.getNeighbours(node).size !== size - 1) {
            return false
        }
    }

    return true
}
