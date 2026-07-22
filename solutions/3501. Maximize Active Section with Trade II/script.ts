import { arrayOfZeros, matrixOfZeros } from '../../common/array-factories'

export { maxActiveSectionsAfterTrade }

interface ZeroBlock {
    start: number
    end: number
}

interface SparseTable {
    table: number[][]
    log: number[]
}

function maxActiveSectionsAfterTrade(s: string, queries: number[][]): number[] {
    const totalOnes: number = countOnes(s)
    const zeroBlocks: ZeroBlock[] = findZeroBlocks(s)
    const adjacentSums: number[] = buildAdjacentSums(zeroBlocks)
    const adjacentSparseTable: SparseTable = buildSparseTable(adjacentSums)

    const answer: number[] = []
    for (const query of queries) {
        const left: number = query[0]
        const right: number = query[1]
        const gain: number = computeGain(left, right, zeroBlocks, adjacentSparseTable)
        answer.push(totalOnes + gain)
    }

    return answer
}

function countOnes(s: string): number {
    let count: number = 0
    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === '1') {
            count++
        }
    }

    return count
}

function findZeroBlocks(s: string): ZeroBlock[] {
    const zeroBlocks: ZeroBlock[] = []
    let index: number = 0
    while (index < s.length) {
        if (s[index] === '0') {
            const start: number = index
            while (index < s.length && s[index] === '0') {
                index++
            }

            zeroBlocks.push({ start, end: index - 1 })
        } else {
            index++
        }
    }

    return zeroBlocks
}

function buildAdjacentSums(zeroBlocks: ZeroBlock[]): number[] {
    const adjacentSums: number[] = []
    for (let i: number = 0; i + 1 < zeroBlocks.length; i++) {
        adjacentSums.push(fullLength(zeroBlocks[i]) + fullLength(zeroBlocks[i + 1]))
    }

    return adjacentSums
}

function buildSparseTable(values: number[]): SparseTable {
    const length: number = values.length
    const log: number[] = arrayOfZeros(length + 1)
    for (let i: number = 2; i <= length; i++) {
        log[i] = log[i >> 1] + 1
    }

    const maxLevel: number = length > 0 ? log[length] + 1 : 1
    const table: number[][] = matrixOfZeros(maxLevel, length)
    for (let i: number = 0; i < length; i++) {
        table[0][i] = values[i]
    }

    for (let level: number = 1; level < maxLevel; level++) {
        const span: number = 1 << level
        const halfSpan: number = 1 << (level - 1)
        for (let i: number = 0; i + span <= length; i++) {
            table[level][i] = Math.max(table[level - 1][i], table[level - 1][i + halfSpan])
        }
    }

    return { table, log }
}

function computeGain(
    left: number,
    right: number,
    zeroBlocks: ZeroBlock[],
    adjacentSparseTable: SparseTable
): number {
    const firstBlock: number = firstBlockEndingAtOrAfter(zeroBlocks, left)
    const lastBlock: number = lastBlockStartingAtOrBefore(zeroBlocks, right)
    if (firstBlock > lastBlock) {
        return 0
    }

    if (firstBlock === lastBlock) {
        return 0
    }

    const clippedFirst: number = clippedLength(zeroBlocks[firstBlock], left, right)
    const clippedLast: number = clippedLength(zeroBlocks[lastBlock], left, right)

    let gain: number = 0

    const secondLength: number = firstBlock + 1 === lastBlock
        ? clippedLast
        : fullLength(zeroBlocks[firstBlock + 1])
    gain = Math.max(gain, clippedFirst + secondLength)

    const secondToLastLength: number = lastBlock - 1 === firstBlock
        ? clippedFirst
        : fullLength(zeroBlocks[lastBlock - 1])
    gain = Math.max(gain, secondToLastLength + clippedLast)

    const interiorLeft: number = firstBlock + 1
    const interiorRight: number = lastBlock - 2
    if (interiorLeft <= interiorRight) {
        gain = Math.max(gain, querySparseTableMax(adjacentSparseTable, interiorLeft, interiorRight))
    }

    return gain
}

function firstBlockEndingAtOrAfter(zeroBlocks: ZeroBlock[], position: number): number {
    let low: number = 0
    let high: number = zeroBlocks.length
    while (low < high) {
        const mid: number = (low + high) >> 1
        if (zeroBlocks[mid].end >= position) {
            high = mid
        } else {
            low = mid + 1
        }
    }

    return low
}

function lastBlockStartingAtOrBefore(zeroBlocks: ZeroBlock[], position: number): number {
    let low: number = 0
    let high: number = zeroBlocks.length
    while (low < high) {
        const mid: number = (low + high) >> 1
        if (zeroBlocks[mid].start <= position) {
            low = mid + 1
        } else {
            high = mid
        }
    }

    return low - 1
}

function querySparseTableMax(sparseTable: SparseTable, left: number, right: number): number {
    const length: number = right - left + 1
    const level: number = sparseTable.log[length]
    const span: number = 1 << level

    return Math.max(sparseTable.table[level][left], sparseTable.table[level][right - span + 1])
}

function clippedLength(block: ZeroBlock, left: number, right: number): number {
    return Math.min(block.end, right) - Math.max(block.start, left) + 1
}

function fullLength(block: ZeroBlock): number {
    return block.end - block.start + 1
}
