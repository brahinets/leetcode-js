import {UndirectedUnweightedGraph} from "../../common/Graph"
import {arrayOf} from "../../common/array-factories"

export {mostProfitablePath}

function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
    const graph: UndirectedUnweightedGraph = new UndirectedUnweightedGraph()
    const bobPath: Map<number, number> = new Map<number, number>()
    const visited: boolean[] = arrayOf(false, amount.length)
    let maxIncome: number = Number.MIN_SAFE_INTEGER
    const queue: [number, number, number][] = [[0, 0, 0]]

    for (const [u, v] of edges) {
        graph.addEdge(u, v)
    }

    findBobPath(graph, bob, 0, bobPath, visited)

    visited.fill(false)

    while (queue.length > 0) {
        const [node, time, income]: [number, number, number] = queue.shift()!
        let newIncome: number = income

        if (!bobPath.has(node) || time < bobPath.get(node)!) {
            newIncome += amount[node]
        } else if (time === bobPath.get(node)!) {
            newIncome += Math.floor(amount[node] / 2)
        }

        if (graph.getNeighbours(node).size === 1 && node !== 0) {
            maxIncome = Math.max(maxIncome, newIncome)
        }

        for (const neighbor of graph.getNeighbours(node).keys()) {
            if (!visited[neighbor]) {
                queue.push([neighbor, time + 1, newIncome])
            }
        }

        visited[node] = true
    }

    return maxIncome
}

function findBobPath(
    graph: UndirectedUnweightedGraph,
    node: number,
    time: number,
    bobPath: Map<number, number>,
    visited: boolean[]
): boolean {
    bobPath.set(node, time)
    visited[node] = true

    if (node === 0) {
        return true
    }

    for (const neighbor of graph.getNeighbours(node).keys()) {
        if (!visited[neighbor] && findBobPath(graph, neighbor, time + 1, bobPath, visited)) {
            return true
        }
    }

    bobPath.delete(node)
    return false
}
