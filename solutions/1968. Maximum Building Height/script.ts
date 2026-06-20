export {maxBuilding}

function compareByFirstElement(a: number[], b: number[]): number {
    return a[0] - b[0]
}

function maxBuilding(n: number, restrictions: number[][]): number {
    const points: number[][] = [[1, 0]]

    for (const restriction of restrictions) {
        points.push([restriction[0], restriction[1]])
    }

    points.sort(compareByFirstElement)

    if (points[points.length - 1][0] !== n) {
        points.push([n, 2_000_000_000])
    }

    for (let i: number = 1; i < points.length; i++) {
        const distance: number = points[i][0] - points[i - 1][0]
        points[i][1] = Math.min(points[i][1], points[i - 1][1] + distance)
    }

    for (let i: number = points.length - 2; i >= 0; i--) {
        const distance: number = points[i + 1][0] - points[i][0]
        points[i][1] = Math.min(points[i][1], points[i + 1][1] + distance)
    }

    let maxHeight: number = 0

    for (let i: number = 1; i < points.length; i++) {
        const distance: number = points[i][0] - points[i - 1][0]
        const leftHeight: number = points[i - 1][1]
        const rightHeight: number = points[i][1]
        maxHeight = Math.max(maxHeight, Math.floor((distance + leftHeight + rightHeight) / 2))
    }

    return maxHeight
}
