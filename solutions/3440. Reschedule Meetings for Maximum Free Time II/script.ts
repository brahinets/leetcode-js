import {arrayOf} from "../../common/array-factories"

export {maxFreeTime}

function maxFreeTime(totalEventTime: number, meetingStarts: number[], meetingEnds: number[]): number {
    const meetingCount: number = meetingStarts.length
    const canRemove: boolean[] = arrayOf(false, meetingCount)
    let maxLeftGap: number = 0
    let maxRightGap: number = 0
    for (let i: number = 0; i < meetingCount; i++) {
        if (meetingEnds[i] - meetingStarts[i] <= maxLeftGap) {
            canRemove[i] = true
        }

        maxLeftGap = Math.max(maxLeftGap, meetingStarts[i] - (i === 0 ? 0 : meetingEnds[i - 1]))

        if (meetingEnds[meetingCount - i - 1] - meetingStarts[meetingCount - i - 1] <= maxRightGap) {
            canRemove[meetingCount - i - 1] = true
        }

        maxRightGap = Math.max(maxRightGap,
            (i === 0 ? totalEventTime : meetingStarts[meetingCount - i]) - meetingEnds[meetingCount - i - 1]
        )
    }

    let maxFreeTime: number = 0
    for (let i: number = 0; i < meetingCount; i++) {
        const gapStart: number = i === 0 ? 0 : meetingEnds[i - 1]
        const gapEnd: number = i === meetingCount - 1 ? totalEventTime : meetingStarts[i + 1]

        if (canRemove[i]) {
            maxFreeTime = Math.max(maxFreeTime, gapEnd - gapStart)
        } else {
            maxFreeTime = Math.max(maxFreeTime, gapEnd - gapStart - (meetingEnds[i] - meetingStarts[i]))
        }
    }

    return maxFreeTime
}
