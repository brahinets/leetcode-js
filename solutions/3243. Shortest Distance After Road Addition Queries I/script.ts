import {arrayOf} from "../../common/array-factories"

export {shortestDistanceAfterQueries}

function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
    const distances: number[] = arrayOf(-1, n)

    const neighbours: number[][] = arrayOf([], n)
    for (let i: number = 0; i < n - 1; i++) {
        neighbours[i].push(i + 1)
    }

    const answer: number[] = []
    for (const road of queries) {
        const [u, v] = road
        neighbours[u].push(v)
        answer.push(findMinDistance(neighbours, n, 0, distances))
        distances.fill(-1)
    }

    return answer
}

function findMinDistance(
    neighbours: number[][],
    n: number,
    currentNode: number,
    distances: number[]
): number {
    if (currentNode === n - 1) {
        return 0
    }

    if (distances[currentNode] !== -1) {
        return distances[currentNode]
    }

    let minDistance: number = n
    for (const neighbor of neighbours[currentNode]) {
        minDistance = Math.min(
            minDistance,
            findMinDistance(neighbours, n, neighbor, distances) + 1
        )
    }

    return distances[currentNode] = minDistance
}
