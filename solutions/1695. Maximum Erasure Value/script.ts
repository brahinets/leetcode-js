export {maximumUniqueSubarray}

function maximumUniqueSubarray(nums: number[]): number {
    const seen: Set<number> = new Set<number>()

    let left: number = 0
    let maxSum: number = 0
    let currentSum: number = 0

    for (const num of nums) {
        while (seen.has(num)) {
            seen.delete(nums[left])
            currentSum -= nums[left]
            left++
        }

        seen.add(num)
        currentSum += num
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}
