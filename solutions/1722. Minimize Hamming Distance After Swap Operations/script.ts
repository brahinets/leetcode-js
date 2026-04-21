export { minimumHammingDistance }

function minimumHammingDistance(
    source: number[],
    target: number[],
    allowedSwaps: number[][]
): number {
    const length: number = source.length
    const parent: number[] = Array.from<number>({ length }).map((_: number, index: number): number => index)

    function find(index: number): number {
        if (parent[index] !== index) {
            parent[index] = find(parent[index])
        }

        return parent[index]
    }

    function union(first: number, second: number): void {
        parent[find(first)] = find(second)
    }

    for (const [first, second] of allowedSwaps) {
        union(first, second)
    }

    const componentSourceValues = new Map<number, number[]>()

    for (let index: number = 0; index < length; index++) {
        const root: number = find(index)

        if (!componentSourceValues.has(root)) {
            componentSourceValues.set(root, [])
        }

        componentSourceValues.get(root)!.push(source[index])
    }

    let hammingDistance: number = 0

    for (let index: number = 0; index < length; index++) {
        const root: number = find(index)
        const sourceValues: number[] = componentSourceValues.get(root)!
        const matchPosition: number = sourceValues.indexOf(target[index])

        if (matchPosition === -1) {
            hammingDistance++
        } else {
            sourceValues.splice(matchPosition, 1)
        }
    }

    return hammingDistance
}
