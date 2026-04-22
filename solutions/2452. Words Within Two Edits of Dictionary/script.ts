export { twoEditWords }

function twoEditWords(queries: string[], dictionary: string[]): string[] {
    return queries.filter((query: string): boolean =>
        dictionary.some((word: string): boolean => hammingDistance(query, word) <= 2)
    )
}

function hammingDistance(first: string, second: string): number {
    let distance: number = 0

    for (let index: number = 0; index < first.length; index++) {
        if (first[index] !== second[index]) {
            distance++
        }
    }

    return distance
}
