export {longestSubarray}

function longestSubarray(nums: number[], limit: number): number {
    let maxLength: number = 0

    for (let start = 0; start < nums.length; start++) {
        let max: number = nums[start]
        let min: number = nums[start]

        for (let end = start; end <= nums.length; end++) {
            min = Math.min(min, nums[end])
            max = Math.max(max, nums[end])

            if (max - min <= limit) {
                maxLength = Math.max(maxLength, end - start + 1)
            } else {
                break
            }
        }
    }

    return maxLength
}
