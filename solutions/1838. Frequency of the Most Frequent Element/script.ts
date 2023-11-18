export {maxFrequency}

function maxFrequency(nums: number[], k: number): number {
    nums.sort((a: number, b: number): number => a - b)

    let maxCount: number = 1

    for (let i: number = nums.length - 1; i > 0; i--) {
        const target: number = nums[i]

        let sum: number = 0
        let count: number = 1
        for (let j: number = i - 1; j >= 0; j--) {
            sum += (target - nums[j])
            count++

            if (sum >= k) {
                if (sum > k) {
                    count--
                }
                break
            }
        }

        maxCount = Math.max(maxCount, count)
    }

    return maxCount
}
