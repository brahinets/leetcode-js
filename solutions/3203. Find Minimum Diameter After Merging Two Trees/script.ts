import {UndirectedWeightedGraph} from "../../common/Graph"

export {minimumDiameterAfterMerge}

function minimumDiameterAfterMerge(edges1: number[][], edges2: number[][]): number {
    const diameter1: number = calculateDiameter(buildGraph(edges1))
    const diameter2: number = calculateDiameter(buildGraph(edges2))

    return Math.max(
        Math.ceil(diameter1 / 2) + 1 + Math.ceil(diameter2 / 2),
        diameter1,
        diameter2
    )
}

function buildGraph(edges: number[][]): UndirectedWeightedGraph {
    const graph: UndirectedWeightedGraph = new UndirectedWeightedGraph()

    for (const [a, b] of edges) {
        graph.addEdge(a, b, 1)
    }

    return graph
}

function calculateDiameter(graph: UndirectedWeightedGraph): number {
    const bfs = (start: number): [number, number] => {
        const dist: Map<number, number> = new Map<number, number>()
        const queue: number[] = [start]
        dist.set(start, 0)

        let farthestNode: number = start
        while (queue.length > 0) {
            const current: number = queue.shift()!
            const currentDist: number = dist.get(current)!

            for (const [neighbor, weight] of graph.getNeighbours(current)) {
                if (!dist.has(neighbor)) {
                    dist.set(neighbor, currentDist + weight)
                    queue.push(neighbor)
                    if (dist.get(neighbor)! > dist.get(farthestNode)!) {
                        farthestNode = neighbor
                    }
                }
            }
        }

        return [farthestNode, dist.get(farthestNode)!]
    }

    const [farthestFromStart] = bfs(0)
    const [, diameter] = bfs(farthestFromStart)
    return diameter
}
