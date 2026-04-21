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

    const componentSourceFreq: Map<number, Map<number, number>> = new Map<number, Map<number, number>>()

    for (let index: number = 0; index < length; index++) {
        const root: number = find(index)

        if (!componentSourceFreq.has(root)) {
            componentSourceFreq.set(root, new Map<number, number>())
        }

        const freq: Map<number, number> = componentSourceFreq.get(root)!
        freq.set(source[index], (freq.get(source[index]) ?? 0) + 1)
    }

    let hammingDistance: number = 0

    for (let index: number = 0; index < length; index++) {
        const root: number = find(index)
        const freq: Map<number, number> = componentSourceFreq.get(root)!
        const count: number = freq.get(target[index]) ?? 0

        if (count === 0) {
            hammingDistance++
        } else {
            freq.set(target[index], count - 1)
        }
    }

    return hammingDistance
}
