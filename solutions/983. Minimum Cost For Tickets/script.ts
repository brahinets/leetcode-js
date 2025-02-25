import {arrayOfZeros} from "../../common/array-factories"

export {mincostTickets}

function mincostTickets(days: number[], costs: number[]): number {
    let lastDay: number = days[days.length - 1]
    let dp: number[] = arrayOfZeros(lastDay + 1)

    let i: number = 0
    for (let day: number = 1; day <= lastDay; day++) {
        if (day < days[i]) {
            dp[day] = dp[day - 1]
        } else {
            i++

            dp[day] = Math.min(
                dp[day - 1] + costs[0],
                Math.min(dp[Math.max(0, day - 7)] + costs[1], dp[Math.max(0, day - 30)] + costs[2])
            )
        }
    }

    return dp[lastDay]
}
