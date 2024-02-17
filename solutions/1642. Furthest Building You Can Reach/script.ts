export {furthestBuilding}

function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const climbs: number[] = []

    for (let i: number = 0; i < heights.length - 1; i++) {
        const diff: number = heights[i + 1] - heights[i]
        const climb: boolean = diff > 0

        if (climb) {
            climbs.push(diff)
            climbs.sort((a: number, b: number): number => b - a)
        }

        if (climbs.length > ladders) {
            bricks -= climbs.pop()!
        }

        if (bricks < 0) {
            return i
        }
    }

    return heights.length - 1
}
