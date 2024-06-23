export {longestSubarray}

function longestSubarray(nums: number[], limit: number): number {
    let maxLength: number = 0
    let start: number = 0

    const max: number[] = []
    const min: number[] = []
    for (let end = 0; end < nums.length; end++) {
        while (max.length > 0 && nums[end] > nums[max[max.length - 1]]) {
            max.pop()
        }
        max.push(end)

        while (min.length > 0 && nums[end] < nums[min[min.length - 1]]) {
            min.pop()
        }
        min.push(end)

        while (nums[max[0]] - nums[min[0]] > limit) {
            if (max[0] === start) {
                max.shift()
            }
            if (min[0] === start) {
                min.shift()
            }
            start++
        }

        maxLength = Math.max(maxLength, end - start + 1)
    }

    return maxLength
}
