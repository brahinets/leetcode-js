export {findMinArrowShots}

function findMinArrowShots(points: number[][]): number {
    points = points.toSorted((a: number[], b: number[]) => a[0] - b[0])

    let count: number = 1

    let [commonStart, commonEnd]: number[] = points[0]
    for (let i: number = 1; i < points.length; i++) {
        let [start, end]: number[] = points[i]

        if (start <= commonEnd) {
            [commonStart, commonEnd] = [Math.max(start, commonStart), Math.min(end, commonEnd)]
        } else {
            [commonStart, commonEnd] = [start, end]
            count++
        }
    }

    return count
}
