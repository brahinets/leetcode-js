export {canTraverseAllPairs}

function canTraverseAllPairs(nums: number[]): boolean {
    let graph: UndirectedGraph = new UndirectedGraph()
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            const gcdValue: number = gcd(nums[i], nums[j])
            if (gcdValue > 1) {
                graph.addEdge([i, j, gcdValue])
            }
        }
    }

    for (let i: number = 0; i < nums.length; i++) {
        const reachable: Set<number> = graph.getReachableNodes(i)

        for (let j: number = i + 1; j < nums.length; j++) {
            if (!reachable.has(j)) {
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
    private readonly nodes: Map<number, Map<number, number>>

    constructor() {
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

    getReachableNodes(start: number): Set<number> {
        const visited: Set<number> = new Set<number>()
        const queue: number[] = [start]
        const reachableNodes: Set<number> = new Set<number>()

        while (queue.length > 0) {
            const node: number = queue.shift()!
            if (!visited.has(node)) {
                visited.add(node)
                reachableNodes.add(node)

                if (this.nodes.has(node)) {
                    for (const neighbour of this.nodes.get(node)!.keys()) {
                        queue.push(neighbour)
                    }
                }
            }
        }

        return reachableNodes
    }
}
