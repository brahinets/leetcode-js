export {maximalRectangle}

function maximalRectangle(matrix: string[][]): number {
    for (let row: number = 0; row < matrix.length; row++) {
        for (let col: number = 0; col < matrix[row].length; col++) {
            if (row > 0 && matrix[row][col] === "1" && matrix[row - 1][col] !== "0") {
                matrix[row][col] = String(Number(matrix[row][col]) + Number(matrix[row - 1][col]))
            }
        }
    }

    let maxArea: number = 0
    for (let row: number = 0; row < matrix.length; row++) {
        maxArea = Math.max(maxArea, largestRectangleArea(matrix[row].map(Number)))
    }

    return maxArea
}

function largestRectangleArea(heights: number[]): number {
    const stack: number[] = []

    let maxArea: number = 0
    for (let col: number = 0; col <= heights.length; col++) {
        const height: number = col < heights.length ? heights[col] : 0

        while (stack.length > 0 && height < heights[stack[stack.length - 1]]) {
            const top: number = stack.pop()!
            const width: number = stack.length === 0 ? col : col - stack[stack.length - 1] - 1
            maxArea = Math.max(maxArea, heights[top] * width)
        }

        stack.push(col)
    }

    return maxArea
}
