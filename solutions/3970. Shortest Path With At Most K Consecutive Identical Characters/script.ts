import { PriorityQueue } from '../../common/PriorityQueue'
import { arrayOf } from '../../common/array-factories'

export { shortestPath }

function shortestPath(
    nodeCount: number,
    edges: number[][],
    labels: string,
    maximumConsecutive: number
): number {
    const graph: [number, number][][] = arrayOf<[number, number][]>(
        [],
        nodeCount
    )

    for (const [from, to, weight] of edges) {
        graph[from].push([to, weight])
    }

    const runLimit: number = maximumConsecutive + 1
    const minDistance: number[] = arrayOf<number>(
        Infinity,
        nodeCount * runLimit
    )
    const queue: PriorityQueue<number[]> = new PriorityQueue<number[]>(
        (first: number[], second: number[]): number => first[0] - second[0]
    )

    minDistance[stateIndex(0, 1, runLimit)] = 0
    queue.enqueue([0, 0, 1])

    while (!queue.isEmpty()) {
        const [distance, node, run]: number[] = queue.dequeue()!

        if (distance > minDistance[stateIndex(node, run, runLimit)]) {
            continue
        }

        for (const [neighbor, weight] of graph[node]) {
            const neighborRun: number =
                labels[node] === labels[neighbor] ? run + 1 : 1

            if (neighborRun > maximumConsecutive) {
                continue
            }

            const newDistance: number = distance + weight
            const neighborState: number = stateIndex(
                neighbor,
                neighborRun,
                runLimit
            )

            if (newDistance < minDistance[neighborState]) {
                minDistance[neighborState] = newDistance
                queue.enqueue([newDistance, neighbor, neighborRun])
            }
        }
    }

    const finalDistances: number[] = minDistance.slice(
        (nodeCount - 1) * runLimit,
        nodeCount * runLimit
    )
    const shortestDistance: number = Math.min(...finalDistances)

    return shortestDistance === Infinity ? -1 : shortestDistance
}

function stateIndex(node: number, run: number, runLimit: number): number {
    return node * runLimit + run
}
