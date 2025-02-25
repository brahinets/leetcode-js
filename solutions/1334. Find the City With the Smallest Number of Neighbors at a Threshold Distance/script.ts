import {arrayOfZeros, matrixOf} from "../../common/array-factories"

export {findTheCity}

function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
    const dist: number[][] = initializeDistanceMatrix(n, edges)

    floydWarshall(n, dist)

    const reachableCitiesCount: number[] = countReachableCities(n, dist, distanceThreshold)

    return findCityWithFewestReachable(n, reachableCitiesCount)
}

function initializeDistanceMatrix(n: number, edges: number[][]): number[][] {
    const dist: number[][] = matrixOf(1e9, n, n)

    for (let i: number = 0; i < n; i++) {
        dist[i][i] = 0
    }

    for (const [u, v, w] of edges) {
        dist[u][v] = w
        dist[v][u] = w
    }

    return dist
}

function floydWarshall(n: number, dist: number[][]): void {
    for (let k: number = 0; k < n; k++) {
        for (let i: number = 0; i < n; i++) {
            for (let j: number = 0; j < n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
            }
        }
    }
}

function countReachableCities(n: number, dist: number[][], distanceThreshold: number): number[] {
    const reachableCitiesCount: number[] = arrayOfZeros(n)

    for (let i: number = 0; i < n; i++) {
        for (let j: number = 0; j < n; j++) {
            if (dist[i][j] <= distanceThreshold) {
                reachableCitiesCount[i]++
            }
        }
    }

    return reachableCitiesCount
}

function findCityWithFewestReachable(n: number, reachableCitiesCount: number[]): number {
    let city: number = 0
    let minCount: number = n

    for (let i: number = 0; i < n; i++) {
        if (reachableCitiesCount[i] <= minCount) {
            minCount = reachableCitiesCount[i]
            city = i
        }
    }

    return city
}
