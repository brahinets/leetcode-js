import {arrayOf, arrayOfZeros} from "../../common/array-factories"

export {maximumInvitations}

function maximumInvitations(favorite: number[]): number {
    const edges: number[][] = []
    for (let person = 0; person < favorite.length; person++) {
        edges.push([person, favorite[person]])
    }

    const depth: number[] = arrayOf(1, favorite.length)
    const sortedOrder: number[] = topologicalSort(edges, favorite.length)
    for (const currentNode of sortedOrder) {
        const nextNode: number = favorite[currentNode]
        depth[nextNode] = Math.max(depth[nextNode], depth[currentNode] + 1)
    }

    let longestCycle: number = 0
    let twoCycleInvitations: number = 0
    const visited: boolean[] = arrayOf(false, favorite.length)
    for (let person = 0; person < favorite.length; person++) {
        if (visited[person]) {
            continue
        }

        let cycleLength: number = 0
        let current: number = person

        while (!visited[current]) {
            visited[current] = true
            cycleLength++
            current = favorite[current]
        }

        if (cycleLength === 2) {
            twoCycleInvitations += depth[person] + depth[favorite[person]]
        } else {
            longestCycle = Math.max(longestCycle, cycleLength)
        }
    }

    return Math.max(longestCycle, twoCycleInvitations)
}

function topologicalSort(edges: number[][], nodeCount: number): number[] {
    const adjacencyList: number[][] = arrayOf([], nodeCount)
    const inDegree: number[] = arrayOfZeros(nodeCount)
    const sortedOrder: number[] = []

    for (const [fromNode, toNode] of edges) {
        adjacencyList[fromNode].push(toNode)
        inDegree[toNode]++
    }

    const nodeQueue: number[] = []
    for (let node: number = 1; node <= nodeCount; node++) {
        if (inDegree[node] === 0) {
            nodeQueue.push(node)
        }
    }

    while (nodeQueue.length > 0) {
        const currentNode: number = nodeQueue.shift()!
        sortedOrder.push(currentNode);

        for (const neighborNode of adjacencyList[currentNode]) {
            if (--inDegree[neighborNode] === 0) {
                nodeQueue.push(neighborNode)
            }
        }
    }

    return sortedOrder
}
