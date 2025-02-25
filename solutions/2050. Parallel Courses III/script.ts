import {DirectedUnweightedGraph} from "../../common/Graph"
import {arrayOfZeros} from "../../common/array-factories"

export {minimumTime}

function minimumTime(n: number, relations: number[][], time: number[]): number {
    const graph: DirectedUnweightedGraph = new DirectedUnweightedGraph()
    const inDegree: number[] = arrayOfZeros(n)

    for (const [prev, next] of relations) {
        graph.addEdge(prev - 1, next - 1)
        inDegree[next - 1]++
    }

    const queue: number[] = []
    for (let i: number = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i)
        }
    }

    const maxTime: number[] = [...time]
    while (queue.length > 0) {
        const course: number = queue.shift()!
        const neighbors: Map<number, number> = graph.getNeighbours(course)

        for (const nextCourse of neighbors.keys()) {
            maxTime[nextCourse] = Math.max(maxTime[nextCourse], maxTime[course] + time[nextCourse])
            inDegree[nextCourse]--

            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse)
            }
        }
    }

    return Math.max(...maxTime)
}
