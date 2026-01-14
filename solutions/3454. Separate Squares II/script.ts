import {arrayOfZeros} from "../../common/array-factories"

export {separateSquares}

interface Rect {
    x1: number
    x2: number
    y1: number
    y2: number
}

interface SweepEvent {
    x: number
    y1: number
    y2: number
    delta: number
}

function separateSquares(squares: number[][]): number {
    const totalArea: number = computeTotalUnionArea(squares)
    const target: number = totalArea / 2
    const minY: number = minYOfSquares(squares)
    const maxY: number = maxYOfSquares(squares)

    let lo: number = minY
    let hi: number = maxY
    for (let iter: number = 0; iter < 60; iter += 1) {
        const mid: number = (lo + hi) / 2
        const areaBelow: number = unionAreaBelowY(squares, mid)
        if (areaBelow >= target) {
            hi = mid
        } else {
            lo = mid
        }
    }

    return hi
}

function computeTotalUnionArea(squares: number[][]): number {
    const rects: Rect[] = rectanglesFromSquares(squares)

    return computeUnionArea(rects)
}

function unionAreaBelowY(squares: number[][], yLine: number): number {
    const rects: Rect[] = clipRectanglesToY(squares, yLine)

    return computeUnionArea(rects)
}

function rectanglesFromSquares(squares: number[][]): Rect[] {
    const out: Rect[] = []

    for (let i: number = 0; i < squares.length; i += 1) {
        const s: number[] = squares[i]
        const x1: number = s[0]
        const y1: number = s[1]
        const l: number = s[2]
        const x2: number = x1 + l
        const y2: number = y1 + l

        out[i] = {x1, x2, y1, y2}
    }

    return out
}

function clipRectanglesToY(squares: number[][], yLine: number): Rect[] {
    const out: Rect[] = []

    for (let i: number = 0; i < squares.length; i += 1) {
        const s: number[] = squares[i]
        const x1: number = s[0]
        const y1: number = s[1]
        const l: number = s[2]
        const yTop: number = Math.min(y1 + l, yLine)

        if (yTop > y1) {
            const x2: number = x1 + l

            out.push({x1, x2, y1, y2: yTop})
        }
    }

    return out
}

function computeUnionArea(rects: Rect[]): number {
    if (rects.length === 0) {
        return 0
    }

    const ys: number[] = []
    const events: SweepEvent[] = []

    for (let i: number = 0; i < rects.length; i += 1) {
        const r: Rect = rects[i]
        const x1: number = r.x1
        const x2: number = r.x2
        const y1: number = r.y1
        const y2: number = r.y2

        ys.push(y1, y2)

        events.push({x: x1, y1, y2, delta: 1})
        events.push({x: x2, y1, y2, delta: -1})
    }

    const yCoords: number[] = uniqueSortedNumbers(ys)
    const nSegments: number = Math.max(0, yCoords.length - 1)
    if (nSegments === 0) {
        return 0
    }

    events.sort((a: SweepEvent, b: SweepEvent): number => a.x - b.x)

    const countTree: number[] = arrayOfZeros(4 * nSegments)
    const lengthTree: number[] = arrayOfZeros(4 * nSegments)

    let area: number = 0

    for (let i: number = 0; i < events.length; i += 1) {
        const j: number = findNextDifferentXIndex(events, i)

        for (let k: number = i; k <= j; k += 1) {
            const ev: SweepEvent = events[k]
            const leftIndex: number = lowerBoundIndex(yCoords, ev.y1)
            const rightIndex: number = lowerBoundIndex(yCoords, ev.y2) - 1
            if (leftIndex <= rightIndex) {
                updateSegmentTree(1, 0, nSegments - 1, leftIndex, rightIndex, ev.delta, countTree, lengthTree, yCoords)
            }
        }

        if (j + 1 < events.length) {
            const dx: number = events[j + 1].x - events[i].x

            area += lengthTree[1] * dx
        }

        i = j
    }

    return area
}

function updateSegmentTree(
    node: number,
    left: number,
    right: number,
    ql: number,
    qr: number,
    delta: number,
    countTree: number[],
    lengthTree: number[],
    yCoords: number[]
): void {
    if (ql > right || qr < left) {
        return
    }

    if (ql <= left && right <= qr) {
        countTree[node] += delta
    } else {
        const mid: number = (left + right) >> 1

        updateSegmentTree(node << 1, left, mid, ql, qr, delta, countTree, lengthTree, yCoords)
        updateSegmentTree((node << 1) + 1, mid + 1, right, ql, qr, delta, countTree, lengthTree, yCoords)
    }
    if (countTree[node] > 0) {
        lengthTree[node] = yCoords[right + 1] - yCoords[left]
    } else if (left === right) {
        lengthTree[node] = 0
    } else {
        lengthTree[node] = lengthTree[node << 1] + lengthTree[(node << 1) + 1]
    }
}

function uniqueSortedNumbers(arr: number[]): number[] {
    arr.sort((a: number, b: number): number => a - b)

    const out: number[] = []
    for (let i: number = 0; i < arr.length; i += 1) {
        if (i === 0 || arr[i] !== arr[i - 1]) out.push(arr[i])
    }

    return out
}

function lowerBoundIndex(arr: number[], target: number): number {
    let lo: number = 0
    let hi: number = arr.length

    while (lo < hi) {
        const mid: number = (lo + hi) >> 1

        if (arr[mid] < target) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }

    return lo
}

function findNextDifferentXIndex(events: SweepEvent[], start: number): number {
    let i: number = start

    while (i + 1 < events.length && events[i + 1].x === events[start].x) {
        i += 1
    }

    return i
}

function minYOfSquares(squares: number[][]): number {
    let v: number = Infinity

    for (let i: number = 0; i < squares.length; i += 1) {
        if (squares[i][1] < v) v = squares[i][1]
    }

    if (v === Infinity) {
        return 0
    }

    return v
}

function maxYOfSquares(squares: number[][]): number {
    let v: number = -Infinity

    for (let i: number = 0; i < squares.length; i += 1) {
        const top: number = squares[i][1] + squares[i][2]

        if (top > v) {
            v = top
        }
    }

    if (v === -Infinity) {
        return 0
    }

    return v
}
