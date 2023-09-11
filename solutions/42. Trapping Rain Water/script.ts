export {trap}

function trap(height: number[]): number {
    let water: number = 0

    for (let i: number = 1; i < height.length - 1; i++) {
        const leftBorderHeight: number = Math.max(...height.slice(0, i))
        const rightBorderHeight: number = Math.max(...height.slice(i + 1))

        if (leftBorderHeight > height[i] && rightBorderHeight > height[i]) {
            water += Math.min(leftBorderHeight, rightBorderHeight) - height[i]
        }
    }

    return water
}
