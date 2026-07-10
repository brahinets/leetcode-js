import {arrayOfZeros, matrixOfZeros} from '../../common/array-factories'

export {pathExistenceQueries}

interface SortedOrder {
    readonly sortedValues: number[]
    readonly positionByNode: number[]
}

function pathExistenceQueries(nodeCount: number, nums: number[], maxDifference: number, queries: number[][]): number[] {
    const sortedOrder: SortedOrder = buildSortedOrder(nodeCount, nums)
    const farthestReachablePosition: number[] = computeFarthestReachablePositions(sortedOrder.sortedValues, maxDifference)
    const ancestorTable: number[][] = buildAncestorTable(farthestReachablePosition)

    return queries.map(([firstNode, secondNode]: number[]): number =>
        minimumDistanceBetweenPositions(sortedOrder.positionByNode[firstNode], sortedOrder.positionByNode[secondNode], ancestorTable)
    )
}

function buildSortedOrder(nodeCount: number, nums: number[]): SortedOrder {
    const nodesSortedByValue: number[] = arrayOfZeros(nodeCount)

    for (let node: number = 0; node < nodeCount; node++) {
        nodesSortedByValue[node] = node
    }

    nodesSortedByValue.sort((firstNode: number, secondNode: number): number => nums[firstNode] - nums[secondNode])

    const sortedValues: number[] = arrayOfZeros(nodeCount)
    const positionByNode: number[] = arrayOfZeros(nodeCount)

    for (let position: number = 0; position < nodeCount; position++) {
        const node: number = nodesSortedByValue[position]

        sortedValues[position] = nums[node]
        positionByNode[node] = position
    }

    return {sortedValues, positionByNode}
}

function computeFarthestReachablePositions(sortedValues: number[], maxDifference: number): number[] {
    const positionCount: number = sortedValues.length
    const farthestReachablePosition: number[] = arrayOfZeros(positionCount)
    let rightPointer: number = 0

    for (let leftPointer: number = 0; leftPointer < positionCount; leftPointer++) {
        if (rightPointer < leftPointer) {
            rightPointer = leftPointer
        }

        while (rightPointer + 1 < positionCount && sortedValues[rightPointer + 1] - sortedValues[leftPointer] <= maxDifference) {
            rightPointer++
        }

        farthestReachablePosition[leftPointer] = rightPointer
    }

    return farthestReachablePosition
}

function buildAncestorTable(farthestReachablePosition: number[]): number[][] {
    const positionCount: number = farthestReachablePosition.length
    const levelCount: number = Math.max(1, Math.ceil(Math.log2(Math.max(positionCount, 2))))
    const ancestorTable: number[][] = matrixOfZeros(levelCount, positionCount)

    ancestorTable[0] = farthestReachablePosition.slice()

    for (let level: number = 1; level < levelCount; level++) {
        for (let position: number = 0; position < positionCount; position++) {
            ancestorTable[level][position] = ancestorTable[level - 1][ancestorTable[level - 1][position]]
        }
    }

    return ancestorTable
}

function minimumDistanceBetweenPositions(firstPosition: number, secondPosition: number, ancestorTable: number[][]): number {
    if (firstPosition === secondPosition) {
        return 0
    }

    const startPosition: number = Math.min(firstPosition, secondPosition)
    const targetPosition: number = Math.max(firstPosition, secondPosition)

    let currentPosition: number = startPosition
    let stepCount: number = 0

    for (let level: number = ancestorTable.length - 1; level >= 0; level--) {
        const nextPosition: number = ancestorTable[level][currentPosition]

        if (nextPosition < targetPosition) {
            currentPosition = nextPosition
            stepCount += 1 << level
        }
    }

    if (ancestorTable[0][currentPosition] >= targetPosition) {
        return stepCount + 1
    }

    return -1
}
