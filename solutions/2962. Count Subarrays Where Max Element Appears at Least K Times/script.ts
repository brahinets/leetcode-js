export {countSubarrays}

function countSubarrays(nums: number[], k: number): number {
    const max: number = Math.max(...nums)
    let maxCount: number = 0
    let count: number = 0

    let left: number = 0
    for (let right: number = 0; right < nums.length; right++) {
        if (nums[right] === max) {
            maxCount++
        }

        while (maxCount >= k) {
            if (nums[left] === max) {
                maxCount--
            }

            left++
        }

        count += left
    }

    return count
}
