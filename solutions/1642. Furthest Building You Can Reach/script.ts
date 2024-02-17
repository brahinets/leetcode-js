export {furthestBuilding}

function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    let position: number = 0

    let i: number = 1
    while (i < heights.length) {
        const diff: number = heights[i] - heights[position]
        const climb: boolean = diff > 0

        if (climb) {
            if (diff <= bricks) {
                bricks -= diff
            } else if (ladders > 0) {
                ladders--
            } else {
                break
            }
        }

        position = i
        i++
    }

    return position
}
