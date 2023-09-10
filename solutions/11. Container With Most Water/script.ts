export {maxArea}

function maxArea(height: number[]): number {
    let max: number = 0

    let left: number = 0
    let right: number = height.length - 1

    while (left < right) {
        const width: number = right - left
        const commonHeight: number = Math.min(height[left], height[right])
        const area: number = commonHeight * width

        if (area > max) {
            max = area
        }

        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }

    return max
}
