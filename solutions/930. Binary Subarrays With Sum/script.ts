export {numSubarraysWithSum}

function numSubarraysWithSum(nums: number[], goal: number): number {
    return numSubarraysWithMaxSum(nums, goal) - numSubarraysWithMaxSum(nums, goal - 1);
}

function numSubarraysWithMaxSum(nums: number[], goal: number): number {
    let left: number = 0
    let sum: number = 0
    let count: number = 0

    for (let right: number = 0; right < nums.length; right++) {
        sum += nums[right]

        while (left <= right && sum > goal) {
            sum -= nums[left]
            left++
        }

        count += right - left + 1
    }

    return count
}
