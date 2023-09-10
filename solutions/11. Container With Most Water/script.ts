export {maxArea}

function maxArea(height: number[]): number {
    let max: number = 0

    for (let i: number = 0; i < height.length; i++) {
        for (let j: number = i; j < height.length; j++) {
            const width: number = j - i
            const commonHeight: number = Math.min(height[i], height[j])
            const area: number = commonHeight * width

            if (area > max) {
                max = area
            }
        }
    }

    return max
}
