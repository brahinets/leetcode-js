export {maxTotalValue}

type Combine = (first: number, second: number) => number

function maxTotalValue(numbers: number[], k: number): number {
    const length: number = numbers.length
    const logTable: number[] = buildLogTable(length)
    const maximumTable: number[][] = buildSparseTable(numbers, logTable, Math.max)
    const minimumTable: number[][] = buildSparseTable(numbers, logTable, Math.min)

    let globalMaximum: number = numbers[0]
    let globalMinimum: number = numbers[0]
    for (const value of numbers) {
        if (value > globalMaximum) {
            globalMaximum = value
        }

        if (value < globalMinimum) {
            globalMinimum = value
        }
    }

    const maximumValue: number = globalMaximum - globalMinimum
    const threshold: number = findThreshold(numbers, k, maximumTable, minimumTable, logTable, maximumValue)

    let sumOfValues: number = 0
    let chosenCount: number = 0
    let leftBoundary: number = -1
    for (let right: number = 0; right < length; right++) {
        while (leftBoundary + 1 <= right
            && subarrayValue(maximumTable, minimumTable, logTable, leftBoundary + 1, right) > threshold) {
            leftBoundary++
        }

        for (let left: number = 0; left <= leftBoundary; left++) {
            sumOfValues += subarrayValue(maximumTable, minimumTable, logTable, left, right)
        }

        chosenCount += leftBoundary + 1
    }

    return threshold * (k - chosenCount) + sumOfValues
}

function findThreshold(
    numbers: number[],
    k: number,
    maximumTable: number[][],
    minimumTable: number[][],
    logTable: number[],
    maximumValue: number,
): number {
    let low: number = 0
    let high: number = maximumValue
    while (low < high) {
        const middle: number = Math.floor((low + high + 1) / 2)
        const count: number = countSubarraysWithValueAtLeast(numbers, middle, maximumTable, minimumTable, logTable)
        if (count >= k) {
            low = middle
        } else {
            high = middle - 1
        }
    }

    return low
}

function countSubarraysWithValueAtLeast(
    numbers: number[],
    threshold: number,
    maximumTable: number[][],
    minimumTable: number[][],
    logTable: number[],
): number {
    const length: number = numbers.length
    let count: number = 0
    let leftBoundary: number = -1
    for (let right: number = 0; right < length; right++) {
        while (leftBoundary + 1 <= right
            && subarrayValue(maximumTable, minimumTable, logTable, leftBoundary + 1, right) >= threshold) {
            leftBoundary++
        }

        count += leftBoundary + 1
    }

    return count
}

function subarrayValue(
    maximumTable: number[][],
    minimumTable: number[][],
    logTable: number[],
    left: number,
    right: number,
): number {
    return rangeQuery(maximumTable, logTable, left, right, Math.max)
        - rangeQuery(minimumTable, logTable, left, right, Math.min)
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
        const current: number[] = new Array<number>(length).fill(0)
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
    const logTable: number[] = new Array<number>(length + 1).fill(0)
    for (let value: number = 2; value <= length; value++) {
        logTable[value] = logTable[value >> 1] + 1
    }

    return logTable
}
