import {arrayOf} from "../../common/array-factories"

export {maxFreeTime}

function maxFreeTime(eventTime: number, startTime: number[], endTime: number[]): number {
    const n: number = startTime.length
    const q: boolean[] = arrayOf(false, n)
    let t1: number = 0
    let t2: number = 0
    for (let i: number = 0; i < n; i++) {
        if (endTime[i] - startTime[i] <= t1) {
            q[i] = true
        }

        t1 = Math.max(t1, startTime[i] - (i === 0 ? 0 : endTime[i - 1]))

        if (endTime[n - i - 1] - startTime[n - i - 1] <= t2) {
            q[n - i - 1] = true
        }

        t2 = Math.max(t2, (i === 0 ? eventTime : startTime[n - i]) - endTime[n - i - 1],)
    }

    let max: number = 0
    for (let i: number = 0; i < n; i++) {
        const left: number = i === 0 ? 0 : endTime[i - 1]
        const right: number = i === n - 1 ? eventTime : startTime[i + 1]

        if (q[i]) {
            max = Math.max(max, right - left)
        } else {
            max = Math.max(max, right - left - (endTime[i] - startTime[i]))
        }
    }

    return max
}
