export {maxFrequency}

function maxFrequency(nums: number[], k: number, numOperations: number): number {
    nums.sort((a: number, b: number): number => a - b)

    let left: number = 0
    let total: number = 0
    let result: number = 1

    for (let right: number = 0; right < nums.length; right++) {
        total += nums[right]

        while (nums[right] * (right - left + 1) - total > k) {
            total -= nums[left]
            left++
        }

        result = Math.max(result, right - left + 1)
    }

    return result
}
