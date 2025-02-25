export {maxFrequency}

function maxFrequency(nums: number[], k: number): number {
    nums = nums.sort((a: number, b: number): number => a - b)

    let maxFrequency: number = 0
    let windowStart: number = 0
    let allocated: number = 0

    for (let windowEnd: number = 0; windowEnd < nums.length; windowEnd++) {
        const targetNum: number = nums[windowEnd]
        allocated += targetNum

        while (allocated + k < targetNum * (windowEnd - windowStart + 1)) {
            allocated -= nums[windowStart]
            windowStart++
        }

        maxFrequency = Math.max(maxFrequency, windowEnd - windowStart + 1)
    }

    return maxFrequency
}
