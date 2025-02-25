import {count} from "../../common/array-utils"

export {isNStraightHand}

function isNStraightHand(hand: number[], groupSize: number): boolean {
    const counts: Map<number, number> = count(hand.sort((a: number, b: number): number => a - b))

    while (counts.size >= groupSize) {
        let start: number = [...counts.keys()][0]
        let group: number = 0
        while (group < groupSize) {
            if (!counts.has(start)) {
                return false
            }

            const count: number = counts.get(start)!
            if (count === 1) {
                counts.delete(start)
            } else {
                counts.set(start, count - 1)
            }
            group++

            start++
        }
    }

    return counts.size === 0
}
