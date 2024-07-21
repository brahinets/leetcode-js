import {arrayOf, arrayOfZeros, matrixOfZeros} from "../../common/array-factories"

export {buildMatrix}

function buildMatrix(size: number, rowConditions: number[][], columnConditions: number[][]): number[][] {
    const orderedRows: number[] = topologicalSort(rowConditions, size)
    const orderedColumns: number[] = topologicalSort(columnConditions, size)

    if (orderedRows.length === 0 || orderedColumns.length === 0) {
        return []
    }

    const resultMatrix: number[][] = matrixOfZeros(size, size)
    for (let row: number = 0; row < size; row++) {
        for (let col: number = 0; col < size; col++) {
            if (orderedRows[row] === orderedColumns[col]) {
                resultMatrix[row][col] = orderedRows[row]
            }
        }
    }

    return resultMatrix
}

function topologicalSort(edges: number[][], nodeCount: number): number[] {
    const adjacencyList: number[][] = arrayOf([], nodeCount + 1)
    const inDegree: number[] = arrayOfZeros(nodeCount + 1)
    const sortedOrder: number[] = arrayOfZeros(nodeCount)

    let orderIndex: number = 0
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
        sortedOrder[orderIndex++] = currentNode
        nodeCount--

        for (const neighborNode of adjacencyList[currentNode]) {
            if (--inDegree[neighborNode] === 0) {
                nodeQueue.push(neighborNode)
            }
        }
    }

    return nodeCount !== 0 ? [] : sortedOrder
}
