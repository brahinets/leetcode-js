export {furthestBuilding}

const RESERVE: number = -1

function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const climbs: number[] = []
    let climbsCount: number = 0

    for (let i: number = 0; i < heights.length - 1; i++) {
        const diff: number = heights[i + 1] - heights[i]
        const climb: boolean = diff > 0

        if (climb) {
            climbs.push(diff)
            climbsCount++
        }

        if (climbsCount > ladders) {
            const min: number = findIndexOfMin(climbs)
            bricks -= climbs[min]
            climbs[min] = RESERVE
            climbsCount--
        }

        if (bricks < 0) {
            return i
        }
    }

    return heights.length - 1
}

function findIndexOfMin(nums: number[]): number {
    let min: number = Infinity
    let indexOfMin: number = -1
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] !== RESERVE && nums[i] < min) {
            min = nums[i]
            indexOfMin = i
        }
    }

    return indexOfMin
}
