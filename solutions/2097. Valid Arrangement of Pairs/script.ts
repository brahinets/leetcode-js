export {validArrangement}

function validArrangement(pairs: number[][]): number[][] {
    const adjacencyMatrix: Map<number, number[]> = buildAdjacencyMatrix(pairs)
    const outDegree: Map<number, number> = calculateOutDegree(pairs)
    const inDegree: Map<number, number> = calculateInDegree(pairs)
    const startNode: number = findStartNode(pairs, inDegree, outDegree)

    const eulerPath: number[] = findEulerianPath(adjacencyMatrix, startNode)

    return constructResultPairs(eulerPath)
}

function buildAdjacencyMatrix(pairs: number[][]): Map<number, number[]> {
    const adjacencyMatrix: Map<number, number[]> = new Map<number, number[]>()

    for (const [start, end] of pairs) {
        if (!adjacencyMatrix.has(start)) {
            adjacencyMatrix.set(start, [])
        }

        adjacencyMatrix.get(start)!.push(end)
    }

    return adjacencyMatrix
}

function calculateOutDegree(pairs: number[][]): Map<number, number> {
    const outDegree: Map<number, number> = new Map<number, number>()

    for (const [start] of pairs) {
        outDegree.set(start, (outDegree.get(start) || 0) + 1)
    }

    return outDegree
}

function calculateInDegree(pairs: number[][]): Map<number, number> {
    const inDegree: Map<number, number> = new Map<number, number>()

    for (const [, end] of pairs) {
        inDegree.set(end, (inDegree.get(end) || 0) + 1)
    }

    return inDegree
}

function findStartNode(
    pairs: number[][],
    inDegree: Map<number, number>,
    outDegree: Map<number, number>
): number {
    for (const [node, outDeg] of outDegree) {
        if (outDeg === (inDegree.get(node) || 0) + 1) {
            return node
        }
    }

    return pairs[0][0]
}

function findEulerianPath(
    adjacencyMatrix: Map<number, number[]>,
    startNode: number
): number[] {
    const nodeStack: number[] = []
    const path: number[] = []
    nodeStack.push(startNode)

    while (nodeStack.length > 0) {
        const node: number = nodeStack[nodeStack.length - 1]
        const neighbors: number[] = adjacencyMatrix.get(node) ?? []

        if (neighbors && neighbors.length > 0) {
            const nextNode: number = neighbors.shift()!
            nodeStack.push(nextNode)
        } else {
            path.push(node)
            nodeStack.pop()
        }
    }

    return path.reverse()
}

function constructResultPairs(path: number[]): number[][] {
    const result: number[][] = []

    for (let i: number = 1; i < path.length; i++) {
        result.push([path[i - 1], path[i]])
    }

    return result
}
