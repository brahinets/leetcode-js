export {largestRectangleArea}

function largestRectangleArea(heights: number[]): number {
    const n: number = heights.length
    if (n === 0) {
        return 0
    }

    const stack: number[] = [-1]
    let maxArea: number = 0
    for (let i: number = 0; i <= n; i++) {
        const h: number = i === n ? 0 : heights[i]

        while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] > h) {
            const height: number = heights[stack.pop() as number]
            const width: number = i - (stack[stack.length - 1] as number) - 1
            const area: number = height * width

            if (area > maxArea) {
                maxArea = area
            }
        }

        stack.push(i)
    }

    return maxArea
}
