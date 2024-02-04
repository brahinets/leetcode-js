import {arrayOf} from "../../common/array-factories"

export {Graph}

class Graph {
    private readonly size: number
    private readonly nodes: Map<number, Map<number, number>>

    constructor(n: number, edges: number[][]) {
        this.size = n
        this.nodes = new Map<number, Map<number, number>>()
        edges.forEach((edge: number[]): void => this.addEdge(edge))
    }

    addEdge(edge: number[]): void {
        const [from, to, distance] = edge

        const toNode: Map<number, number> = this.nodes.get(from) ?? new Map<number, number>()
        toNode.set(to, distance)
        this.nodes.set(from, toNode)
    }

    shortestPath(from: number, to: number): number {
        return findBellmanFord(this.size, this.nodes, from, to)
    }
}

function findBellmanFord(n: number, nodes: Map<number, Map<number, number>>, from: number, to: number): number {
    const dist: number[] = arrayOf(Number.MAX_VALUE, n)

    dist[from] = 0
    for (let i: number = 0; i < n - 1; i++) {
        for (const [node, neighbours] of nodes) {
            for (const [neighbour, distance] of neighbours) {
                if (dist[node] !== Number.MAX_VALUE && dist[node] + distance < dist[neighbour]) {
                    dist[neighbour] = dist[node] + distance
                }
            }
        }
    }

    if (dist[to] === Number.MAX_VALUE) {
        return -1
    }

    return dist[to]
}
