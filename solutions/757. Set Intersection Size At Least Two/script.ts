import {arrayOf} from "../../common/array-factories"

export {intersectionSizeTwo}

function intersectionSizeTwo(intervals: number[][]): number {
    intervals.sort((a: number[], b: number[]): number => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])

    const remainingIntersections: number[] = arrayOf(2, intervals.length)
    let totalPoints: number = 0

    for (let intervalIndex: number = intervals.length - 1; intervalIndex >= 0; intervalIndex--) {
        const intervalStart: number = intervals[intervalIndex][0]
        const pointsNeeded: number = remainingIntersections[intervalIndex]

        for (let point: number = intervalStart; point < intervalStart + pointsNeeded; point++) {
            for (let checkIndex: number = 0; checkIndex <= intervalIndex; checkIndex++) {
                if (remainingIntersections[checkIndex] > 0 && point <= intervals[checkIndex][1]) {
                    remainingIntersections[checkIndex]--
                }
            }

            totalPoints++
        }
    }

    return totalPoints
}
