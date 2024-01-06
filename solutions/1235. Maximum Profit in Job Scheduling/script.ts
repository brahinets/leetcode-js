export {jobScheduling}

function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    if (startTime.length === 0 || endTime.length === 0 || profit.length === 0) {
        return 0
    }

    const jobs: Job[] = mapJobs(startTime, endTime, profit)
        .sort((a: Job, b: Job): number => a.endTime - b.endTime)

    const maxProfitWithJob: number[] = [jobs[0].profit]
    for (let i: number = 1; i < jobs.length; i++) {
        const latestCompletedBeforeCurrent: number = findLatestCompletedJobIndex(jobs, i)
        const profitBeforeCurrent: number = maxProfitWithJob[latestCompletedBeforeCurrent] ?? 0

        const current: Job = jobs[i]
        const profitWithCurrent: number = current.profit + profitBeforeCurrent

        maxProfitWithJob.push(Math.max(profitWithCurrent, maxProfitWithJob[i - 1]))
    }

    return maxProfitWithJob[maxProfitWithJob.length - 1]
}

function findLatestCompletedJobIndex(jobs: Job[], i: number): number {
    let left: number = 0
    let right: number = i - 1

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2)
        if (jobs[mid].endTime <= jobs[i].startTime) {
            if (jobs[mid + 1].endTime <= jobs[i].startTime) {
                left = mid + 1
            } else {
                return mid
            }
        } else {
            right = mid - 1
        }
    }

    return -1
}

class Job {
    constructor(
        readonly startTime: number,
        readonly endTime: number,
        readonly profit: number
    ) {
    }
}

function mapJobs(startTime: number[], endTime: number[], profit: number[]): Job[] {
    const jobs: Job[] = []

    for (let i: number = 0; i < startTime.length; i++) {
        jobs.push(new Job(startTime[i], endTime[i], profit[i]))
    }
    return jobs
}
