export {maxProfitAssignment}

function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    const jobs: Job[] = collectJobs(difficulty, profit)
    worker.sort((a: number, b: number): number => a - b)

    let totalProfit: number = 0
    let maxProfitForWorker: number = 0
    let takenJobs: number = 0
    for (let w: number = 0; w < worker.length; w++) {
        while (takenJobs < jobs.length && jobs[takenJobs].difficulty <= worker[w]) {
            maxProfitForWorker = Math.max(maxProfitForWorker, jobs[takenJobs].profit)
            takenJobs++
        }

        totalProfit += maxProfitForWorker
    }

    return totalProfit
}

function collectJobs(difficulty: number[], profit: number[]) {
    const jobs: Job[] = []

    for (let i = 0; i < difficulty.length; i++) {
        jobs.push(new Job(difficulty[i], profit[i]))
    }

    jobs.sort((first: Job, second: Job): number => first.difficulty - second.difficulty)

    return jobs
}


class Job {
    constructor(public difficulty: number, public profit: number) {

    }
}
