import {arrayOfZeros} from "../../common/array-factories"

export {peopleAwareOfSecret}

const MOD: number = 1e9 + 7

function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
    const dp: number[] = arrayOfZeros(n + 1)
    dp[1] = 1

    let share: number = 0
    for (let day: number = 2; day <= n; day++) {
        const start: number = Math.max(0, day - forget)
        const end: number = Math.max(0, day - delay)

        share = (share + dp[end] - dp[start] + MOD) % MOD

        dp[day] = share
    }

    let result: number = 0
    for (let day: number = n - forget + 1; day <= n; day++) {
        if (day > 0) result = (result + dp[day]) % MOD
    }

    return result
}
