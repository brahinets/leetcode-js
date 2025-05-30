import {arrayOf} from "../../common/array-factories"

export {closestMeetingNode}

function closestMeetingNode(edges: number[], node1: number, node2: number): number {
    const dist1: number[] = arrayOf(Infinity, edges.length)
    const dist2: number[] = arrayOf(Infinity, edges.length)

    dist1[node1] = 0
    dist2[node2] = 0

    bfs(node1, dist1, edges)
    bfs(node2, dist2, edges)

    let min: number = Infinity
    let closestNode: number = -1

    for (let i: number = 0; i < edges.length; i++) {
        if (dist1[i] !== Infinity && dist2[i] !== Infinity) {
            const max: number = Math.max(dist1[i], dist2[i])

            if (max < min) {
                min = max
                closestNode = i
            }
        }
    }

    return closestNode
}


function bfs(start: number, dist: number[], edges: number[]): void {
    const queue: number[] = [start]

    while (queue.length) {
        const current: number = queue.shift()!
        const next: number = edges[current]

        if (next !== -1 && dist[next] === Infinity) {
            dist[next] = dist[current] + 1
            queue.push(next)
        }
    }
}
