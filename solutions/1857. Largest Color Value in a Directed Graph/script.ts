import {DirectedUnweightedGraph} from '../../common/Graph'
import {arrayOfZeros, matrixOfZeros} from "../../common/array-factories";

export {largestPathValue}

function largestPathValue(colors: string, edges: number[][]): number {
    const graph: DirectedUnweightedGraph = new DirectedUnweightedGraph()
    const indegree: number[] = arrayOfZeros(colors.length)

    for (const [u, v] of edges) {
        graph.addEdge(u, v)
        indegree[v]++
    }

    const queue: number[] = []
    for (let i: number = 0; i < colors.length; i++) {
        if (indegree[i] === 0) {
            queue.push(i)
        }
    }

    const colorCounts: number[][] = matrixOfZeros(colors.length, 26)
    let visited: number = 0
    let maxColorValue: number = 0

    while (queue.length > 0) {
        const node: number = queue.shift()!
        visited++

        const colorIdx: number = colors.charCodeAt(node) - 97
        colorCounts[node][colorIdx]++

        if (colorCounts[node][colorIdx] > maxColorValue) {
            maxColorValue = colorCounts[node][colorIdx]
        }

        for (const [neighbor] of graph.getNeighbours(node)) {
            for (let c: number = 0; c < 26; c++) {
                if (colorCounts[node][c] > colorCounts[neighbor][c]) {
                    colorCounts[neighbor][c] = colorCounts[node][c]
                }
            }

            indegree[neighbor]--

            if (indegree[neighbor] === 0) {
                queue.push(neighbor)
            }
        }
    }

    if (visited === colors.length) {
        return maxColorValue
    } else {
        return -1
    }
}
