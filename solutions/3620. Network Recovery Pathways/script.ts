import {arrayOf, arrayOfZeros} from '../../common/array-factories'

export {findMaxPathScore}

function findMaxPathScore(edges: number[][], online: boolean[], k: number): number {
    const nodeCount: number = online.length
    const destinationNode: number = nodeCount - 1

    const validEdges: number[][] = filterEdgesByOnlineDestination(edges, online)

    if (validEdges.length === 0) {
        return -1
    }

    const adjacencyList: number[][][] = buildAdjacencyList(nodeCount, validEdges)
    const topologicalOrder: number[] = computeTopologicalOrder(nodeCount, adjacencyList, validEdges)
    const sortedDistinctCosts: number[] = getSortedDistinctCosts(validEdges)

    return findMaximumFeasibleThreshold(nodeCount, destinationNode, topologicalOrder, adjacencyList, sortedDistinctCosts, k)
}

function filterEdgesByOnlineDestination(edges: number[][], online: boolean[]): number[][] {
    const validEdges: number[][] = []

    for (const edge of edges) {
        const destination: number = edge[1]

        if (online[destination]) {
            validEdges.push(edge)
        }
    }

    return validEdges
}

function buildAdjacencyList(nodeCount: number, validEdges: number[][]): number[][][] {
    const adjacencyList: number[][][] = arrayOf<number[][]>([], nodeCount)

    for (const [from, to, cost] of validEdges) {
        adjacencyList[from].push([to, cost])
    }

    return adjacencyList
}

function computeTopologicalOrder(nodeCount: number, adjacencyList: number[][][], validEdges: number[][]): number[] {
    const inDegree: number[] = arrayOfZeros(nodeCount)

    for (const [, to] of validEdges) {
        inDegree[to]++
    }

    const queue: number[] = []

    for (let node: number = 0; node < nodeCount; node++) {
        if (inDegree[node] === 0) {
            queue.push(node)
        }
    }

    let head: number = 0

    while (head < queue.length) {
        const current: number = queue[head++]

        for (const [neighbor] of adjacencyList[current]) {
            inDegree[neighbor]--

            if (inDegree[neighbor] === 0) {
                queue.push(neighbor)
            }
        }
    }

    return queue
}

function getSortedDistinctCosts(validEdges: number[][]): number[] {
    const costSet: Set<number> = new Set<number>()

    for (const [, , cost] of validEdges) {
        costSet.add(cost)
    }

    return Array.from<number>(costSet).sort((first: number, second: number): number => first - second)
}

function findMaximumFeasibleThreshold(
    nodeCount: number,
    destinationNode: number,
    topologicalOrder: number[],
    adjacencyList: number[][][],
    sortedDistinctCosts: number[],
    k: number
): number {
    let low: number = 0
    let high: number = sortedDistinctCosts.length - 1
    let result: number = -1

    while (low <= high) {
        const middle: number = (low + high) >>> 1
        const threshold: number = sortedDistinctCosts[middle]
        const minimumCost: number = computeMinimumCost(nodeCount, topologicalOrder, adjacencyList, threshold, destinationNode)

        if (minimumCost <= k) {
            result = threshold
            low = middle + 1
        } else {
            high = middle - 1
        }
    }

    return result
}

function computeMinimumCost(
    nodeCount: number,
    topologicalOrder: number[],
    adjacencyList: number[][][],
    threshold: number,
    destinationNode: number
): number {
    const distances: number[] = arrayOf<number>(Number.POSITIVE_INFINITY, nodeCount)
    distances[0] = 0

    for (const node of topologicalOrder) {
        if (distances[node] === Number.POSITIVE_INFINITY) {
            continue
        }

        for (const [neighbor, cost] of adjacencyList[node]) {
            if (cost >= threshold) {
                const candidateDistance: number = distances[node] + cost

                if (candidateDistance < distances[neighbor]) {
                    distances[neighbor] = candidateDistance
                }
            }
        }
    }

    return distances[destinationNode]
}
