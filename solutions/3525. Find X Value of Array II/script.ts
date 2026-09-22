import { matrixOfZeros } from '../../common/array-factories'

export { resultArray }

interface SegmentTreeNode {
    productResidue: number
    transitionCounts: number[][]
}

function resultArray(nums: number[], k: number, queries: number[][]): number[] {
    const elementCount: number = nums.length
    const values: number[] = [...nums]
    const segmentTree: SegmentTreeNode[] = createSegmentTree(elementCount, k)

    buildSegmentTree(segmentTree, values, k, 1, 0, elementCount - 1)

    const identityResidue: number = 1 % k
    const results: number[] = []

    for (const [index, value, start, x] of queries) {
        values[index] = value
        updateSegmentTree(segmentTree, values, k, 1, 0, elementCount - 1, index)

        const rangeNode: SegmentTreeNode = querySegmentTree(
            segmentTree,
            k,
            1,
            0,
            elementCount - 1,
            start,
            elementCount - 1
        )

        results.push(rangeNode.transitionCounts[identityResidue][x])
    }

    return results
}

function createSegmentTree(elementCount: number, k: number): SegmentTreeNode[] {
    const treeSize: number = 4 * elementCount
    const segmentTree: SegmentTreeNode[] = []

    for (let nodeIndex: number = 0; nodeIndex <= treeSize; nodeIndex++) {
        segmentTree.push(createEmptyNode(k))
    }

    return segmentTree
}

function buildSegmentTree(
    segmentTree: SegmentTreeNode[],
    values: readonly number[],
    k: number,
    nodeIndex: number,
    segmentStart: number,
    segmentEnd: number
): void {
    if (segmentStart === segmentEnd) {
        segmentTree[nodeIndex] = createLeafNode(values[segmentStart], k)
        return
    }

    const segmentMiddle: number = Math.floor((segmentStart + segmentEnd) / 2)
    buildSegmentTree(segmentTree, values, k, nodeIndex * 2, segmentStart, segmentMiddle)
    buildSegmentTree(segmentTree, values, k, nodeIndex * 2 + 1, segmentMiddle + 1, segmentEnd)

    segmentTree[nodeIndex] = mergeNodes(segmentTree[nodeIndex * 2], segmentTree[nodeIndex * 2 + 1], k)
}

function updateSegmentTree(
    segmentTree: SegmentTreeNode[],
    values: readonly number[],
    k: number,
    nodeIndex: number,
    segmentStart: number,
    segmentEnd: number,
    targetIndex: number
): void {
    if (segmentStart === segmentEnd) {
        segmentTree[nodeIndex] = createLeafNode(values[segmentStart], k)
        return
    }

    const segmentMiddle: number = Math.floor((segmentStart + segmentEnd) / 2)

    if (targetIndex <= segmentMiddle) {
        updateSegmentTree(segmentTree, values, k, nodeIndex * 2, segmentStart, segmentMiddle, targetIndex)
    } else {
        updateSegmentTree(segmentTree, values, k, nodeIndex * 2 + 1, segmentMiddle + 1, segmentEnd, targetIndex)
    }

    segmentTree[nodeIndex] = mergeNodes(segmentTree[nodeIndex * 2], segmentTree[nodeIndex * 2 + 1], k)
}

function querySegmentTree(
    segmentTree: readonly SegmentTreeNode[],
    k: number,
    nodeIndex: number,
    segmentStart: number,
    segmentEnd: number,
    queryStart: number,
    queryEnd: number
): SegmentTreeNode {
    if (queryStart <= segmentStart && segmentEnd <= queryEnd) {
        return segmentTree[nodeIndex]
    }

    const segmentMiddle: number = Math.floor((segmentStart + segmentEnd) / 2)

    if (queryEnd <= segmentMiddle) {
        return querySegmentTree(segmentTree, k, nodeIndex * 2, segmentStart, segmentMiddle, queryStart, queryEnd)
    }

    if (queryStart > segmentMiddle) {
        return querySegmentTree(
            segmentTree,
            k,
            nodeIndex * 2 + 1,
            segmentMiddle + 1,
            segmentEnd,
            queryStart,
            queryEnd
        )
    }

    const leftResult: SegmentTreeNode = querySegmentTree(
        segmentTree,
        k,
        nodeIndex * 2,
        segmentStart,
        segmentMiddle,
        queryStart,
        queryEnd
    )

    const rightResult: SegmentTreeNode = querySegmentTree(
        segmentTree,
        k,
        nodeIndex * 2 + 1,
        segmentMiddle + 1,
        segmentEnd,
        queryStart,
        queryEnd
    )

    return mergeNodes(leftResult, rightResult, k)
}

function createLeafNode(value: number, k: number): SegmentTreeNode {
    const residue: number = value % k
    const transitionCounts: number[][] = matrixOfZeros(k, k)

    for (let startResidue: number = 0; startResidue < k; startResidue++) {
        transitionCounts[startResidue][(startResidue * residue) % k] = 1
    }

    return {
        productResidue: residue,
        transitionCounts
    }
}

function mergeNodes(leftNode: SegmentTreeNode, rightNode: SegmentTreeNode, k: number): SegmentTreeNode {
    const transitionCounts: number[][] = matrixOfZeros(k, k)

    for (let startResidue: number = 0; startResidue < k; startResidue++) {
        const middleResidue: number = (startResidue * leftNode.productResidue) % k

        for (let endResidue: number = 0; endResidue < k; endResidue++) {
            transitionCounts[startResidue][endResidue] =
                leftNode.transitionCounts[startResidue][endResidue] +
                rightNode.transitionCounts[middleResidue][endResidue]
        }
    }

    return {
        productResidue: (leftNode.productResidue * rightNode.productResidue) % k,
        transitionCounts
    }
}

function createEmptyNode(k: number): SegmentTreeNode {
    return {
        productResidue: 0,
        transitionCounts: matrixOfZeros(k, k)
    }
}
