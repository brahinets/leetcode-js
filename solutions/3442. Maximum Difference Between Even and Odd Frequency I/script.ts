import {count} from "../../common/array-utils"

export {maxDifference}

function maxDifference(s: string): number {
    const counts: Map<string, number> = count(s.split(''))

    let maxOdd: number = 1
    let minEven: number = s.length

    for (const [, value] of counts) {
        if (value % 2 === 1) {
            maxOdd = Math.max(maxOdd, value)
        } else {
            minEven = Math.min(minEven, value)
        }
    }

    return maxOdd - minEven
}
