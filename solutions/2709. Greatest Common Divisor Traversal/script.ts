export {canTraverseAllPairs}

function canTraverseAllPairs(nums: number[]): boolean {
    const graph: Graph = buildGraph(nums)

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

function buildGraph(nums: number[]): Graph {
    const graph: Graph = new Graph()

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            const gcdValue: number = gcd(nums[i], nums[j])

            if (gcdValue > 1) {
                graph.addEdge(i, j)
                graph.addEdge(j, i)
            }
        }
    }

    return graph
}

function gcd(a: number, b: number): number {
    if (b === 0) {
        return a
    }

    return gcd(b, a % b)
}

class Graph {
    private readonly nodes: Map<number, Set<number>>

    constructor() {
        this.nodes = new Map<number, Set<number>>()
    }

    addEdge(from: number, to: number): void {
        if (!this.nodes.has(from)) {
            this.nodes.set(from, new Set<number>())
        }

        this.nodes.get(from)!.add(to)
    }

    getReachableNodes(start: number): Set<number> {
        const visited: boolean[] = []
        visited[start] = true

        const queue: number[] = [start]
        const reachableNodes: Set<number> = new Set<number>([start])

        while (queue.length > 0) {
            const node: number = queue.shift()!
            const neighbours: Set<number> | undefined = this.nodes.get(node)

            if (neighbours) {
                for (const neighbour of neighbours) {
                    if (!visited[neighbour]) {
                        visited[neighbour] = true
                        reachableNodes.add(neighbour)
                        queue.push(neighbour)
                    }
                }
            }
        }

        return reachableNodes
    }
}
