export {maximalRectangle}

function maximalRectangle(matrix: string[][]): number {
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix[i].length; j++) {
            if (i > 0 && matrix[i][j] === "1" && matrix[i - 1][j] !== "0") {
                matrix[i][j] = String(Number(matrix[i][j]) + Number(matrix[i - 1][j]))
            }
        }
    }

    let max: number = 0
    for (let i: number = 0; i < matrix.length; i++) {
        max = Math.max(max, largestRectangleArea(matrix[i].map(Number)))
    }

    return max
}

function largestRectangleArea(heights: number[]): number {
    const stack: number[] = []

    let maxArea: number = 0
    for (let i: number = 0; i <= heights.length; i++) {
        const height: number = i < heights.length ? heights[i] : 0

        if (stack.length === 0 || height >= heights[stack[stack.length - 1]]) {
            stack.push(i)
        } else {
            const top: number = stack.pop()!
            const width: number = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
            maxArea = Math.max(maxArea, heights[top] * width)
        }
    }

    return maxArea
}
