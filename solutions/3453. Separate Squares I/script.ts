export {separateSquares}

function separateSquares(squares: number[][]): number {
    const diff: Map<bigint, bigint> = buildDiff(squares)
    const total: bigint = totalAreaFromSquares(squares)
    const keys: bigint[] = sortedKeys(diff)

    return computeBreakPosition(keys, diff, total)
}

function buildDiff(squares: number[][]): Map<bigint, bigint> {
    const diff = new Map<bigint, bigint>()
    for (let i: number = 0; i < squares.length; i++) {
        applySquareToDiff(diff, squares[i])
    }
    return diff
}

function startYOf(square: number[]): bigint {
    return BigInt(square[1])
}

function sizeOf(square: number[]): bigint {
    return BigInt(square[2])
}

function applySquareToDiff(diff: Map<bigint, bigint>, square: number[]): void {
    const y: bigint = startYOf(square)
    const s: bigint = sizeOf(square)
    addDiff(diff, y, s)
    addDiff(diff, y + s, -s)
}

function getOrZero(map: Map<bigint, bigint>, key: bigint): bigint {
    const v: bigint | undefined = map.get(key)
    return v === undefined ? 0n : v
}

function addDiff(map: Map<bigint, bigint>, key: bigint, delta: bigint): void {
    map.set(key, getOrZero(map, key) + delta)
}

function totalAreaFromSquares(squares: number[][]): bigint {
    let total: bigint = 0n
    for (let i: number = 0; i < squares.length; i++) {
        const s: bigint = sizeOf(squares[i])

        total += s * s
    }

    return total
}

function sortedKeys(diff: Map<bigint, bigint>): bigint[] {
    return Array.from(diff.keys()).sort(compareBigInt)
}

function compareBigInt(a: bigint, b: bigint): number {
    return a < b ? -1 : a > b ? 1 : 0
}

function computeBreakPosition(keys: bigint[], diff: Map<bigint, bigint>, total: bigint): number {
    let accumulatedArea: bigint = 0n
    let activeWidth: bigint = 0n

    for (let i: number = 0; i + 1 < keys.length; i++) {
        const y: bigint = keys[i]
        const y2: bigint = keys[i + 1]

        activeWidth += getOrZero(diff, y)

        const height: bigint = y2 - y
        const segmentArea: bigint = activeWidth * height
        const areaAfter: bigint = accumulatedArea + segmentArea

        if (areaAfter * 2n >= total) {
            const numerator: bigint = total - 2n * accumulatedArea
            const denominator: bigint = 2n * activeWidth
            return Number(y) + Number(numerator) / Number(denominator)
        }

        accumulatedArea = areaAfter
    }

    return Number(keys.length ? keys[keys.length - 1] : 0n)
}
