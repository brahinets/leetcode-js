export {maxWidthOfVerticalArea}

function maxWidthOfVerticalArea(points: number[][]): number {
    const x: number[] = points
        .map((xy: number[]): number => xy[0])
        .sort((a: number, b: number) => a - b)

    let max: number = 0
    for (let i: number = 0; i < x.length - 1; i++) {
        const width: number = x[i + 1] - x[i]
        if (width > max) {
            max = width
        }
    }

    return max
}
