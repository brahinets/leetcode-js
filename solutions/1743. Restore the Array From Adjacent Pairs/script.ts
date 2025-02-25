export {restoreArray}

function restoreArray(adjacentPairs: number[][]): number[] {
    const neighbours: Map<number, number[]> = collectAdjacency(adjacentPairs)

    const result: number[] = []
    for (const [node, neighbors] of neighbours) {
        if (neighbors.length === 1) {
            result.push(node)
            result.push(neighbors[0])
            break
        }
    }

    while (result.length < adjacentPairs.length + 1) {
        const lastNode: number = result[result.length - 1]
        const neighbors: number[] = neighbours.get(lastNode)!
        const nextNode: number = neighbors[0] === result[result.length - 2] ? neighbors[1] : neighbors[0]
        result.push(nextNode)
    }

    return result
}

function collectAdjacency(adjacentPairs: number[][]): Map<number, number[]> {
    const neighbours: Map<number, number[]> = new Map<number, number[]>()

    for (const [from, to] of adjacentPairs) {
        neighbours.set(from, (neighbours.get(from) || []).concat(to))
        neighbours.set(to, (neighbours.get(to) || []).concat(from))
    }

    return neighbours
}
