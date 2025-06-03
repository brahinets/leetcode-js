import {arrayOf} from "../../common/array-factories"

export {maxCandies}

function maxCandies(
    status: number[],
    candies: number[],
    keys: number[][],
    containedBoxes: number[][],
    initialBoxes: number[]
): number {
    const boxCount = status.length
    const canOpen: boolean[] = arrayOf(false, boxCount)
    const hasBox: boolean[] = arrayOf(false, boxCount)
    const used: boolean[] = arrayOf(false, boxCount)
    for (let i: number = 0; i < boxCount; ++i) {
        canOpen[i] = status[i] === 1
    }

    const queue: number[] = []
    let max: number = 0

    for (const box of initialBoxes) {
        hasBox[box] = true

        if (canOpen[box]) {
            queue.push(box)
            used[box] = true
            max += candies[box]
        }
    }

    while (queue.length > 0) {
        const bigBox: number = queue.shift()!

        for (const key of keys[bigBox]) {
            canOpen[key] = true

            if (!used[key] && hasBox[key]) {
                queue.push(key)
                used[key] = true
                max += candies[key]
            }
        }

        for (const box of containedBoxes[bigBox]) {
            hasBox[box] = true

            if (!used[box] && canOpen[box]) {
                queue.push(box)
                used[box] = true
                max += candies[box]
            }
        }
    }

    return max
}
