export {furthestBuilding}

function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const climbs: number[] = []

    for (let i: number = 0; i < heights.length - 1; i++) {
        const diff: number = heights[i + 1] - heights[i]
        const climb: boolean = diff > 0

        if (climb) {
            climbs.push(diff)
        }

        if (climbs.length > ladders) {
            const min: number = findIndexOfMin(climbs)
            bricks -= climbs[min]
            climbs.splice(min, 1)
        }

        if (bricks < 0) {
            return i
        }
    }

    return heights.length - 1
}

function findIndexOfMin(nums: number[]): number {
    let min: number = nums[0]
    let indexOfMin: number = 0
    for (let i: number = 0; i < nums.length && i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
            indexOfMin = i
        }
    }

    return indexOfMin
}
