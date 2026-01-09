import {matrixOf} from "../../common/array-factories"

export {minDifficulty}

function minDifficulty(jobDifficulty: number[], days: number): number {
    const jobsCount: number = jobDifficulty.length

    const dp: number[][] = matrixOf(Infinity, jobsCount + 1, days + 1)
    dp[0][0] = 0

    for (let job: number = 1; job <= jobsCount; job++) {
        for (let day: number = 1; day <= days; day++) {
            for (let k: number = job - 1; k >= day - 1; k--) {
                dp[job][day] = Math.min(dp[job][day], dp[k][day - 1] + Math.max(...jobDifficulty.slice(k, job)))
            }
        }
    }

    return dp[jobsCount][days] === Infinity ? -1 : dp[jobsCount][days]
}
