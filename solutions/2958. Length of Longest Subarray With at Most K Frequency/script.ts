export {maxSubarrayLength}

function maxSubarrayLength(nums: number[], k: number): number {
    const frequencies: Map<number, number> = new Map<number, number>()
    let max: number = 0
    let left: number = 0
    let right: number = 0
    while (right < nums.length) {
        frequencies.set(nums[right], (frequencies.get(nums[right]) ?? 0) + 1)

        while (frequencies.get(nums[right])! > k) {
            frequencies.set(nums[left], frequencies.get(nums[left])! - 1)
            left++
        }

        max = Math.max(max, right - left + 1)
        right++
    }

    return max
}
