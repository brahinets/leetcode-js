export {separateSquares}

type HorizontalSlice = [number, number, number]

interface SweepEvent {
    x: number
    y1: number
    y2: number
    delta: number
}

function separateSquares(squares: number[][]): number {
    if (squares.length === 0) {
        return 0
    }

    const events: SweepEvent[] = createEvents(squares)

    sortEvents(events)

    const {slices, totalArea, lastY} = buildHorizontalSlices(events)

    return findSeparatingY(slices, totalArea, lastY)
}

function createEvents(inputSquares: number[][]): SweepEvent[] {
    const events: SweepEvent[] = []

    for (let i: number = 0; i < inputSquares.length; i += 1) {
        const square: number[] = inputSquares[i]
        const xOrigin: number = square[0]
        const yOrigin: number = square[1]
        const sideLength: number = square[2]

        events.push({x: yOrigin, delta: 1, y1: xOrigin, y2: xOrigin + sideLength})
        events.push({x: yOrigin + sideLength, delta: -1, y1: xOrigin, y2: xOrigin + sideLength})
    }

    return events
}

function sortEvents(events: SweepEvent[]): void {
    events.sort((a: SweepEvent, b: SweepEvent): number =>
        a.x - b.x || b.delta - a.delta || a.y1 - b.y1 || a.y2 - b.y2
    )
}

function computeUnionWidth(intervals: Array<[number, number]>): number {
    if (intervals.length === 0) {
        return 0
    }

    intervals.sort((a: [number, number], b: [number, number]): number => a[0] - b[0] || a[1] - b[1])

    let totalWidth: number = 0
    let currentLeft: number = intervals[0][0]
    let currentRight: number = intervals[0][1]

    for (let i: number = 1; i < intervals.length; i += 1) {
        const left: number = intervals[i][0]
        const right: number = intervals[i][1]

        if (left > currentRight) {
            totalWidth += currentRight - currentLeft
            currentLeft = left
            currentRight = right
        } else if (right > currentRight) {
            currentRight = right
        }
    }

    totalWidth += currentRight - currentLeft
    return totalWidth
}

function buildHorizontalSlices(events: SweepEvent[]): {
    slices: HorizontalSlice[];
    totalArea: number;
    lastY: number
} {
    if (events.length === 0) {
        return {slices: [], totalArea: 0, lastY: 0}
    }

    const activeIntervals: Array<[number, number]> = []
    const horizontalSlices: HorizontalSlice[] = []
    let previousY: number = events[0].x
    let accumulatedArea: number = 0

    for (let i: number = 0; i < events.length; i += 1) {
        const event: SweepEvent = events[i]
        const currentY: number = event.x

        if (currentY > previousY && activeIntervals.length > 0) {
            const sliceHeight: number = currentY - previousY
            const sliceWidth: number = computeUnionWidth(activeIntervals.slice())

            horizontalSlices.push([previousY, sliceHeight, sliceWidth])
            accumulatedArea += sliceHeight * sliceWidth
        }

        if (event.delta === 1) {
            activeIntervals.push([event.y1, event.y2])
        } else {
            for (let k: number = 0; k < activeIntervals.length; k += 1) {
                if (activeIntervals[k][0] === event.y1 && activeIntervals[k][1] === event.y2) {
                    activeIntervals.splice(k, 1)

                    break
                }
            }
        }

        previousY = currentY
    }

    return {slices: horizontalSlices, totalArea: accumulatedArea, lastY: previousY}
}

function findSeparatingY(slices: HorizontalSlice[], totalArea: number, fallbackY: number): number {
    const halfArea: number = totalArea / 2
    let accumulator: number = 0

    for (let i: number = 0; i < slices.length; i += 1) {
        const sliceStartY: number = slices[i][0]
        const sliceHeight: number = slices[i][1]
        const sliceWidth: number = slices[i][2]
        const sliceArea: number = sliceHeight * sliceWidth

        if (accumulator + sliceArea >= halfArea) {
            return sliceStartY + (halfArea - accumulator) / sliceWidth
        }

        accumulator += sliceArea
    }

    return fallbackY
}
