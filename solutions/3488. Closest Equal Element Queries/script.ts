export { solveQueries }

function solveQueries(numbers: number[], queries: number[]): number[] {
    const length: number = numbers.length
    const indexMap = new Map<number, number[]>()

    for (let index: number = 0; index < length; index++) {
        const value: number = numbers[index]
        if (!indexMap.has(value)) {
            indexMap.set(value, [])
        }

        indexMap.get(value)!.push(index)
    }

    const positionInGroup = new Map<number, number>()

    for (const indices of indexMap.values()) {
        for (let position: number = 0; position < indices.length; position++) {
            positionInGroup.set(indices[position], position)
        }
    }

    return queries.map((queryIndex: number): number => {
        const value: number = numbers[queryIndex]
        const indices: number[] = indexMap.get(value)!

        if (indices.length === 1) {
            return -1
        }

        const position: number = positionInGroup.get(queryIndex)!
        const count: number = indices.length
        const previousIndex: number = indices[(position - 1 + count) % count]
        const nextIndex: number = indices[(position + 1) % count]

        const distanceToPrevious: number = circularDistance(queryIndex, previousIndex, length)
        const distanceToNext: number = circularDistance(queryIndex, nextIndex, length)

        return Math.min(distanceToPrevious, distanceToNext)
    })
}

function circularDistance(indexA: number, indexB: number, length: number): number {
    const absoluteDistance: number = Math.abs(indexA - indexB)
    return Math.min(absoluteDistance, length - absoluteDistance)
}
