export {sumFourDivisors}

function sumFourDivisors(nums: number[]): number {
    let totalSum: number = 0

    for (const num of nums) {
        let divisorsCount: number = 0
        let divisorsSum: number = 0

        for (let i: number = 1; i * i <= num; i++) {
            if (num % i === 0) {
                divisorsCount++
                divisorsSum += i

                if (i !== num / i) {
                    divisorsCount++
                    divisorsSum += num / i
                }
            }

            if (divisorsCount > 4) {
                break
            }
        }

        if (divisorsCount === 4) {
            totalSum += divisorsSum
        }
    }

    return totalSum
}
