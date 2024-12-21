import {arrayOf} from "./array-factories"

export {DirectedWeightedGraph, DirectedUnweightedGraph, UndirectedWeightedGraph, UndirectedUnweightedGraph}

abstract class Graph {
    protected readonly nodes: Map<number, Map<number, number>>

    constructor() {
        this.nodes = new Map<number, Map<number, number>>()
    }

    addEdge(from: number, to: number, weight: number): void {
        const toNode: Map<number, number> = this.nodes.get(from) ?? new Map<number, number>()
        toNode.set(to, weight)
        this.nodes.set(from, toNode)
    }

    hasNode(node: number): boolean {
        return this.nodes.has(node)
    }

    getNeighbours(from: number): Map<number, number> {
        return this.nodes.get(from) ?? new Map<number, number>()
    }

    pathExist(from: number, to: number): boolean {
        return this.dfs(from, to, new Set<number>())
    }

    shortestPath(from: number, to: number): number {
        return this.findBellmanFord(from, to)
    }


    private dfs(node: number, target: number, visited: Set<number>): boolean {
        if (node === target) {
            return true
        }

        visited.add(node)

        for (const [neighbor] of this.getNeighbours(node)) {
            if (!visited.has(neighbor)) {
                if (this.dfs(neighbor, target, visited)) {
                    return true
                }
            }
        }

        return false
    }

    private findBellmanFord(from: number, to: number): number {
        const nodesCount: number = this.nodesCount()

        const dist: number[] = arrayOf(Number.MAX_VALUE, nodesCount)
        dist[from] = 0
        for (let i: number = 0; i < nodesCount - 1; i++) {
            for (const [node, neighbours] of this.nodes) {
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

    private nodesCount(): number {
        const nodeSet: Set<number> = new Set<number>()

        for (const [node, neighbours] of this.nodes) {
            nodeSet.add(node)
            for (const neighbour of neighbours.keys()) {
                nodeSet.add(neighbour)
            }
        }

        return nodeSet.size
    }
}

class DirectedWeightedGraph extends Graph {
    addEdge(from: number, to: number, weight: number): void {
        super.addEdge(from, to, weight)
    }
}

class DirectedUnweightedGraph extends Graph {
    private readonly WEIGHT: number = 1

    addEdge(from: number, to: number): void {
        super.addEdge(from, to, this.WEIGHT)
    }
}

class UndirectedWeightedGraph extends Graph {
    addEdge(from: number, to: number, weight: number): void {
        super.addEdge(from, to, weight)
        super.addEdge(to, from, weight)
    }
}

class UndirectedUnweightedGraph extends Graph {
    private readonly WEIGHT: number = 1

    addEdge(from: number, to: number): void {
        super.addEdge(to, from, this.WEIGHT)
        super.addEdge(from, to, this.WEIGHT)
    }
}
