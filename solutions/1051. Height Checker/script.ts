export {heightChecker}

function heightChecker(heights: number[]): number {
    const validHeights: number[] = [...heights].sort((a: number, b: number) => a - b)

    let count: number = 0
    for (let i = 0; i < validHeights.length; i++) {
        if (validHeights[i] !== heights[i]) {
            count++
        }
    }

    return count
}
