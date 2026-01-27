import { PriorityQueue } from '../../common/PriorityQueue'
import { arrayOf } from '../../common/array-factories'

export { minCost }

function minCost(n: number, edges: number[][]): number {
    const graph: [number, number][][] = arrayOf<[number, number][]>([], n)

    for (const [from, to, weight] of edges) {
        graph[from].push([to, weight])
        graph[to].push([from, 2 * weight])
    }

    const minDistance: number[] = arrayOf<number>(Infinity, n)
    minDistance[0] = 0

    const queue: PriorityQueue<[number, number]> = new PriorityQueue<[number, number]>(
        (first: [number, number], second: [number, number]): number => first[0] - second[0]
    )
    queue.enqueue([0, 0])

    while (!queue.isEmpty()) {
        const [distance, node]: [number, number] = queue.dequeue()!

        if (distance > minDistance[node]) {
            continue
        }

        for (const [neighbor, weight] of graph[node]) {
            const newDistance: number = distance + weight

            if (newDistance < minDistance[neighbor]) {
                minDistance[neighbor] = newDistance
                queue.enqueue([newDistance, neighbor])
            }
        }
    }

    return minDistance[n - 1] === Infinity ? -1 : minDistance[n - 1]
}
