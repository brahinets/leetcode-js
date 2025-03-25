export {checkValidCuts}

function checkValidCuts(n: number, rectangles: number[][]): boolean {
    return checkCuts(rectangles, 0) || checkCuts(rectangles, 1)
}

function checkCuts(rectangles: number[][], dim: number): boolean {
    rectangles.sort((a: number[], b: number[]) => a[dim] - b[dim])

    let gapCount: number = 0
    let furthestEnd: number = rectangles[0][dim + 2]

    for (let i: number = 1; i < rectangles.length; i++) {
        let rect: number[] = rectangles[i]

        if (furthestEnd <= rect[dim]) {
            gapCount++
        }

        furthestEnd = Math.max(furthestEnd, rect[dim + 2])
    }

    return gapCount >= 2
}
