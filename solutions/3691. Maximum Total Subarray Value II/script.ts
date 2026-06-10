import {arrayOfZeros} from '../../common/array-factories'

export {maxTotalValue}

type Combine = (first: number, second: number) => number

interface RangeTables {
    readonly maximumTable: number[][]
    readonly minimumTable: number[][]
    readonly logTable: number[]
}

function maxTotalValue(numbers: number[], k: number): number {
    const length: number = numbers.length
    const logTable: number[] = buildLogTable(length)
    const tables: RangeTables = {
        maximumTable: buildSparseTable(numbers, logTable, Math.max),
        minimumTable: buildSparseTable(numbers, logTable, Math.min),
        logTable,
    }

    const maximumValue: number = subarrayValue(tables, 0, length - 1)
    const threshold: number = findThreshold(tables, length, k, maximumValue)

    let sumOfValues: number = 0
    let chosenCount: number = 0
    let leftBoundary: number = -1
    for (let right: number = 0; right < length; right++) {
        while (leftBoundary + 1 <= right && subarrayValue(tables, leftBoundary + 1, right) > threshold) {
            leftBoundary++
        }

        for (let left: number = 0; left <= leftBoundary; left++) {
            sumOfValues += subarrayValue(tables, left, right)
        }

        chosenCount += leftBoundary + 1
    }

    return threshold * (k - chosenCount) + sumOfValues
}

function findThreshold(tables: RangeTables, length: number, k: number, maximumValue: number): number {
    let low: number = 0
    let high: number = maximumValue
    while (low < high) {
        const middle: number = Math.floor((low + high + 1) / 2)
        const count: number = countSubarraysWithValueAtLeast(tables, length, middle)
        if (count >= k) {
            low = middle
        } else {
            high = middle - 1
        }
    }

    return low
}

function countSubarraysWithValueAtLeast(tables: RangeTables, length: number, threshold: number): number {
    let count: number = 0
    let leftBoundary: number = -1
    for (let right: number = 0; right < length; right++) {
        while (leftBoundary + 1 <= right && subarrayValue(tables, leftBoundary + 1, right) >= threshold) {
            leftBoundary++
        }

        count += leftBoundary + 1
    }

    return count
}

function subarrayValue(tables: RangeTables, left: number, right: number): number {
    return rangeQuery(tables.maximumTable, tables.logTable, left, right, Math.max)
        - rangeQuery(tables.minimumTable, tables.logTable, left, right, Math.min)
}

function rangeQuery(table: number[][], logTable: number[], left: number, right: number, combine: Combine): number {
    const span: number = right - left + 1
    const power: number = logTable[span]

    return combine(table[power][left], table[power][right - (1 << power) + 1])
}

function buildSparseTable(numbers: number[], logTable: number[], combine: Combine): number[][] {
    const length: number = numbers.length
    const maximumPower: number = logTable[length] + 1
    const table: number[][] = []
    table.push([...numbers])

    for (let power: number = 1; power < maximumPower; power++) {
        const previous: number[] = table[power - 1]
        const current: number[] = arrayOfZeros(length)
        const span: number = 1 << power
        const half: number = 1 << (power - 1)
        for (let start: number = 0; start + span <= length; start++) {
            current[start] = combine(previous[start], previous[start + half])
        }

        table.push(current)
    }

    return table
}

function buildLogTable(length: number): number[] {
    const logTable: number[] = arrayOfZeros(length + 1)
    for (let value: number = 2; value <= length; value++) {
        logTable[value] = logTable[value >> 1] + 1
    }

    return logTable
}
