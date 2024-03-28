export {maxSubarrayLength}

function maxSubarrayLength(nums: number[], k: number): number {
    const frequencies: Map<number, number> = new Map<number, number>()
    let max: number = 0
    let left: number = 0
    let right: number = 0
    while (right < nums.length) {
        frequencies.set(nums[right], (frequencies.get(nums[right]) ?? 0) + 1)

        let freq: number = maxFrequency(frequencies)
        while (freq > k) {
            frequencies.set(nums[left], frequencies.get(nums[left])! - 1)
            freq = maxFrequency(frequencies)
            left++
        }

        max = Math.max(max, right - left + 1)
        right++
    }

    return max
}

function maxFrequency(frequencies: Map<number, number>): number {
    let maxFrequency: number = 0

    for (const frequency of frequencies.values()) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency
        }
    }

    return maxFrequency
}
