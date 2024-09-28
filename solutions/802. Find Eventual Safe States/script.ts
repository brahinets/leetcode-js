export {eventualSafeNodes}

function eventualSafeNodes(graphMatrix: number[][]): number[] {
    const result: number[] = []

    for (let nodeId: number = 0; nodeId < graphMatrix.length; nodeId++) {
        if (safeNode(nodeId, graphMatrix, new Set<number>([nodeId]), new Set<number>())) {
            result.push(nodeId)
        }
    }

    return result.sort((a: number, b: number): number => a - b)
}

function safeNode(nodeId: number, graphMatrix: number[][], visited: Set<number>, safe: Set<number>): boolean {
    if (safe.has(nodeId)) {
        return true
    }

    const neighbours: number[] | undefined = graphMatrix[nodeId]

    if (isTerminal(neighbours)) {
        safe.add(nodeId)
        return true
    }

    for (const n of neighbours) {
        if (visited.has(n)) {
            return false
        }

        visited.add(n)
        if (!safeNode(n, graphMatrix, visited, safe)) {
            return false
        }
        visited.delete(n)
    }

    safe.add(nodeId)
    return true
}

function isTerminal(neighbours: number[]): boolean {
    return neighbours === undefined || neighbours.length === 0
}
