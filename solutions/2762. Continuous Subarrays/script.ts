export {continuousSubarrays}

function continuousSubarrays(nums: number[]): number {
    let right: number = 0
    let left: number = 0
    let windowLen: number = 0
    let total: number = 0

    let min: number = nums[right]
    let max: number = nums[right]
    for (right = 0; right < nums.length; right++) {
        min = Math.min(min, nums[right])
        max = Math.max(max, nums[right])

        if (max - min > 2) {
            windowLen = right - left
            total += ((windowLen * (windowLen + 1)) / 2)

            left = right
            min = max = nums[right]

            while (left > 0 && Math.abs(nums[right] - nums[left - 1]) <= 2) {
                left--
                min = Math.min(min, nums[left])
                max = Math.max(max, nums[left])
            }

            if (left < right) {
                windowLen = right - left
                total -= ((windowLen * (windowLen + 1)) / 2)
            }
        }
    }

    windowLen = right - left
    total += ((windowLen * (windowLen + 1)) / 2)

    return total
}
