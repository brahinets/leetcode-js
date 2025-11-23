export {maxSumDivThree}

function maxSumDivThree(nums: number[]): number {
    const dp: number[] = [0, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]

    for (const num of nums) {
        const temp: number[] = [...dp]

        for (let i: number = 0; i < 3; i++) {
            const sum: number = temp[i] + num

            dp[sum % 3] = Math.max(dp[sum % 3], sum)
        }
    }

    return dp[0]
}
