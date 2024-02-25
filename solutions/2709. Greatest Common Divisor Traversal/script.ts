import {arrayOf} from "../../common/array-factories"

export {canTraverseAllPairs}

function canTraverseAllPairs(nums: number[]): boolean {
    let graph: UndirectedGraph = new UndirectedGraph(nums.length)
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            const gcdValue: number = gcd(nums[i], nums[j])
            if (gcdValue > 1) {
                graph.addEdge([i, j, gcdValue])
            }
        }
    }

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            if (graph.shortestPath(i, j) === -1) {
                return false
            }
        }
    }

    return true
}

function gcd(a: number, b: number): number {
    if (b === 0) {
        return a
    }

    return gcd(b, a % b)
}


class UndirectedGraph {
    private readonly size: number
    private readonly nodes: Map<number, Map<number, number>>

    constructor(n: number) {
        this.size = n
        this.nodes = new Map<number, Map<number, number>>()
    }

    addEdge(edge: number[]): void {
        const [from, to, distance] = edge

        const toNode: Map<number, number> = this.nodes.get(from) ?? new Map<number, number>()
        toNode.set(to, distance)
        this.nodes.set(from, toNode)

        const fromNode: Map<number, number> = this.nodes.get(to) ?? new Map<number, number>()
        fromNode.set(from, distance)
        this.nodes.set(to, fromNode)
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
