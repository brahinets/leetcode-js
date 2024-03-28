import {count} from "../../common/array-utils"

export {maxSubarrayLength}

function maxSubarrayLength(nums: number[], k: number): number {
    let max: number = 0
    let left: number = 0
    let right: number = 0
    while (right <= nums.length) {
        let freq: number = maxFrequency(count(nums.slice(left, right)))
        while (freq > k) {
            left++
            freq = maxFrequency(count(nums.slice(left, right)))
        }

        max = Math.max(max, right - left)
        right++
    }

    return max
}

function maxFrequency(frequencies: Map<number, number>):number {
    let maxFrequency: number = 0

    for (const frequency of frequencies.values()) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency
        }
    }

    return maxFrequency
}
