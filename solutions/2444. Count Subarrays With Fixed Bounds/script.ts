export {countSubarrays}

function countSubarrays(nums: number[], minK: number, maxK: number): number {
    let min: number | undefined
    let max: number | undefined
    let count: number = 0

    let left: number = 0
    for (let right: number = 0; right < nums.length; right++) {
        const windowEnd: number = nums[right]

        if (windowEnd < minK || windowEnd > maxK) {
            min = undefined
            max = undefined
            left = right + 1
        }

        if (windowEnd === minK) {
            min = right
        }
        if (windowEnd === maxK) {
            max = right
        }

        if (min !== undefined && max !== undefined) {
            count += Math.min(min, max) + 1 - left
        }
    }

    return count
}
