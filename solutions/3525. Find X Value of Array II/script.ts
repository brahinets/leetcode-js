export { resultArray }

interface QueryAccumulator {
    started: boolean
    productResidue: number
    matrix: Float64Array
}

function resultArray(nums: number[], k: number, queries: number[][]): number[] {
    const elementCount: number = nums.length
    const values: number[] = [...nums]
    const treeSize: number = 4 * elementCount
    const matrixSize: number = k * k
    const productResidues: Float64Array = new Float64Array(treeSize + 1)
    const transitionCounts: Float64Array = new Float64Array((treeSize + 1) * matrixSize)

    buildSegmentTree(productResidues, transitionCounts, values, k, matrixSize, 1, 0, elementCount - 1)

    const identityResidue: number = 1 % k
    const results: number[] = []
    const accumulator: QueryAccumulator = {
        started: false,
        productResidue: 0,
        matrix: new Float64Array(matrixSize)
    }

    for (const [index, value, start, x] of queries) {
        values[index] = value
        updateSegmentTree(productResidues, transitionCounts, values, k, matrixSize, 1, 0, elementCount - 1, index)

        accumulator.started = false
        querySegmentTree(
            productResidues,
            transitionCounts,
            k,
            matrixSize,
            1,
            0,
            elementCount - 1,
            start,
            elementCount - 1,
            accumulator
        )

        results.push(accumulator.matrix[identityResidue * k + x])
    }

    return results
}

function buildSegmentTree(
    productResidues: Float64Array,
    transitionCounts: Float64Array,
    values: readonly number[],
    k: number,
    matrixSize: number,
    nodeIndex: number,
    segmentStart: number,
    segmentEnd: number
): void {
    if (segmentStart === segmentEnd) {
        writeLeafNode(productResidues, transitionCounts, values, k, matrixSize, nodeIndex, segmentStart)
        return
    }

    const segmentMiddle: number = Math.floor((segmentStart + segmentEnd) / 2)
    buildSegmentTree(
        productResidues,
        transitionCounts,
        values,
        k,
        matrixSize,
        nodeIndex * 2,
        segmentStart,
        segmentMiddle
    )
    buildSegmentTree(
        productResidues,
        transitionCounts,
        values,
        k,
        matrixSize,
        nodeIndex * 2 + 1,
        segmentMiddle + 1,
        segmentEnd
    )

    mergeChildren(productResidues, transitionCounts, k, matrixSize, nodeIndex, nodeIndex * 2, nodeIndex * 2 + 1)
}

function updateSegmentTree(
    productResidues: Float64Array,
    transitionCounts: Float64Array,
    values: readonly number[],
    k: number,
    matrixSize: number,
    nodeIndex: number,
    segmentStart: number,
    segmentEnd: number,
    targetIndex: number
): void {
    if (segmentStart === segmentEnd) {
        writeLeafNode(productResidues, transitionCounts, values, k, matrixSize, nodeIndex, segmentStart)
        return
    }

    const segmentMiddle: number = Math.floor((segmentStart + segmentEnd) / 2)

    if (targetIndex <= segmentMiddle) {
        updateSegmentTree(
            productResidues,
            transitionCounts,
            values,
            k,
            matrixSize,
            nodeIndex * 2,
            segmentStart,
            segmentMiddle,
            targetIndex
        )
    } else {
        updateSegmentTree(
            productResidues,
            transitionCounts,
            values,
            k,
            matrixSize,
            nodeIndex * 2 + 1,
            segmentMiddle + 1,
            segmentEnd,
            targetIndex
        )
    }

    mergeChildren(productResidues, transitionCounts, k, matrixSize, nodeIndex, nodeIndex * 2, nodeIndex * 2 + 1)
}

function querySegmentTree(
    productResidues: Float64Array,
    transitionCounts: Float64Array,
    k: number,
    matrixSize: number,
    nodeIndex: number,
    segmentStart: number,
    segmentEnd: number,
    queryStart: number,
    queryEnd: number,
    accumulator: QueryAccumulator
): void {
    if (queryStart <= segmentStart && segmentEnd <= queryEnd) {
        if (accumulator.started) {
            mergeAccumulator(accumulator, productResidues, transitionCounts, k, matrixSize, nodeIndex)
        } else {
            initializeAccumulator(accumulator, productResidues, transitionCounts, matrixSize, nodeIndex)
        }

        return
    }

    const segmentMiddle: number = Math.floor((segmentStart + segmentEnd) / 2)

    if (queryStart <= segmentMiddle) {
        querySegmentTree(
            productResidues,
            transitionCounts,
            k,
            matrixSize,
            nodeIndex * 2,
            segmentStart,
            segmentMiddle,
            queryStart,
            queryEnd,
            accumulator
        )
    }

    if (queryEnd > segmentMiddle) {
        querySegmentTree(
            productResidues,
            transitionCounts,
            k,
            matrixSize,
            nodeIndex * 2 + 1,
            segmentMiddle + 1,
            segmentEnd,
            queryStart,
            queryEnd,
            accumulator
        )
    }
}

function writeLeafNode(
    productResidues: Float64Array,
    transitionCounts: Float64Array,
    values: readonly number[],
    k: number,
    matrixSize: number,
    nodeIndex: number,
    position: number
): void {
    const residue: number = values[position] % k
    const base: number = nodeIndex * matrixSize

    for (let cellIndex: number = 0; cellIndex < matrixSize; cellIndex++) {
        transitionCounts[base + cellIndex] = 0
    }

    for (let startResidue: number = 0; startResidue < k; startResidue++) {
        transitionCounts[base + startResidue * k + ((startResidue * residue) % k)] = 1
    }

    productResidues[nodeIndex] = residue
}

function mergeChildren(
    productResidues: Float64Array,
    transitionCounts: Float64Array,
    k: number,
    matrixSize: number,
    targetIndex: number,
    leftIndex: number,
    rightIndex: number
): void {
    const targetBase: number = targetIndex * matrixSize
    const leftBase: number = leftIndex * matrixSize
    const rightBase: number = rightIndex * matrixSize
    const leftProductResidue: number = productResidues[leftIndex]
    const rightProductResidue: number = productResidues[rightIndex]

    for (let startResidue: number = 0; startResidue < k; startResidue++) {
        const middleResidue: number = (startResidue * leftProductResidue) % k

        for (let endResidue: number = 0; endResidue < k; endResidue++) {
            transitionCounts[targetBase + startResidue * k + endResidue] =
                transitionCounts[leftBase + startResidue * k + endResidue] +
                transitionCounts[rightBase + middleResidue * k + endResidue]
        }
    }

    productResidues[targetIndex] = (leftProductResidue * rightProductResidue) % k
}

function initializeAccumulator(
    accumulator: QueryAccumulator,
    productResidues: Float64Array,
    transitionCounts: Float64Array,
    matrixSize: number,
    nodeIndex: number
): void {
    const base: number = nodeIndex * matrixSize

    for (let cellIndex: number = 0; cellIndex < matrixSize; cellIndex++) {
        accumulator.matrix[cellIndex] = transitionCounts[base + cellIndex]
    }

    accumulator.productResidue = productResidues[nodeIndex]
    accumulator.started = true
}

function mergeAccumulator(
    accumulator: QueryAccumulator,
    productResidues: Float64Array,
    transitionCounts: Float64Array,
    k: number,
    matrixSize: number,
    nodeIndex: number
): void {
    const base: number = nodeIndex * matrixSize
    const leftProductResidue: number = accumulator.productResidue
    const rightProductResidue: number = productResidues[nodeIndex]

    for (let startResidue: number = 0; startResidue < k; startResidue++) {
        const middleResidue: number = (startResidue * leftProductResidue) % k

        for (let endResidue: number = 0; endResidue < k; endResidue++) {
            const cellIndex: number = startResidue * k + endResidue
            accumulator.matrix[cellIndex] =
                accumulator.matrix[cellIndex] + transitionCounts[base + middleResidue * k + endResidue]
        }
    }

    accumulator.productResidue = (leftProductResidue * rightProductResidue) % k
}
