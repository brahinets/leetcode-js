import {arrayOfZeros} from "../../common/array-factories"

export {trap}

function trap(height: number[]): number {
    const leftBorderByPosition: number[] = getLeftBorderByPosition(height)
    const rightBorderByPosition: number[] = getRightBorderByPosition(height)

    let water: number = 0
    for (let i: number = 0; i < height.length; i++) {
        const minHeight: number = Math.min(leftBorderByPosition[i], rightBorderByPosition[i])

        if (minHeight > height[i]) {
            water += minHeight - height[i]
        }
    }

    return water
}

function getRightBorderByPosition(height: number[]): number[] {
    let borders: number[] = arrayOfZeros(height.length)

    let maxLeft: number = 0
    for (let i: number = 0; i < height.length; i++) {
        borders[i] = maxLeft
        maxLeft = Math.max(maxLeft, height[i])
    }

    return borders
}

function getLeftBorderByPosition(height: number[]): number[] {
    let borders: number[] = arrayOfZeros(height.length)

    let maxRight: number = 0
    for (let i: number = height.length - 1; i >= 0; i--) {
        borders[i] = maxRight
        maxRight = Math.max(maxRight, height[i])
    }

    return borders
}
