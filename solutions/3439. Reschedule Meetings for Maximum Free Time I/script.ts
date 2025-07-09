import { arrayOfZeros } from "../../common/array-factories"

export { maxFreeTime }

function maxFreeTime(eventDuration: number, removeCount: number, meetingStarts: number[], meetingEnds: number[]): number {
    const meetingCount: number = meetingStarts.length

    if (meetingCount === 0 || removeCount === 0) {
        return eventDuration
    }

    const prefixDurations: number[] = calculatePrefixDurations(meetingStarts, meetingEnds)

    let maxInterval: number = 0
    for (let idx: number = removeCount - 1; idx < meetingCount; idx++) {
        const intervalStart: number = idx === removeCount - 1 ? 0 : meetingEnds[idx - removeCount]
        const intervalEnd: number = idx === meetingCount - 1 ? eventDuration : meetingStarts[idx + 1]
        const removed: number = prefixDurations[idx + 1] - prefixDurations[idx - removeCount + 1]

        maxInterval = Math.max(maxInterval, intervalEnd - intervalStart - removed)
    }

    return maxInterval
}

function calculatePrefixDurations(starts: number[], ends: number[]): number[] {
    const prefix: number[] = arrayOfZeros(starts.length + 1)

    for (let i: number = 0; i < starts.length; i++) {
        prefix[i + 1] = prefix[i] + (ends[i] - starts[i])
    }

    return prefix
}