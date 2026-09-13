export { largestOverlap }

function largestOverlap(img1: number[][], img2: number[][]): number {
    const imageSize: number = img1.length
    let maximumOverlap: number = 0

    for (let rowShift: number = -(imageSize - 1); rowShift <= imageSize - 1; rowShift++) {
        for (let columnShift: number = -(imageSize - 1); columnShift <= imageSize - 1; columnShift++) {
            const overlap: number = calculateOverlap(img1, img2, rowShift, columnShift)
            maximumOverlap = Math.max(maximumOverlap, overlap)
        }
    }

    return maximumOverlap
}

function calculateOverlap(
    firstImage: number[][],
    secondImage: number[][],
    rowShift: number,
    columnShift: number,
): number {
    const imageSize: number = firstImage.length
    let overlap: number = 0

    for (let row: number = 0; row < imageSize; row++) {
        for (let column: number = 0; column < imageSize; column++) {
            const translatedRow: number = row + rowShift
            const translatedColumn: number = column + columnShift

            if (
                translatedRow >= 0 &&
                translatedRow < imageSize &&
                translatedColumn >= 0 &&
                translatedColumn < imageSize &&
                firstImage[row][column] === 1 &&
                secondImage[translatedRow][translatedColumn] === 1
            ) {
                overlap++
            }
        }
    }

    return overlap
}