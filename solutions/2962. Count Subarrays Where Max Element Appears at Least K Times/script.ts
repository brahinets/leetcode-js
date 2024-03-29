export {countSubarrays}

function countSubarrays(nums: number[], k: number): number {
    const max: number = Math.max(...nums)
    let maxCount: number = 0
    let count: number = 0

    let left: number = 0
    let right: number = 0
    while (right < nums.length) {
        if (nums[right] === max) {
            maxCount++
        }

        while (maxCount >= k) {
            if (nums[left] === max) {
                maxCount--
            }

            left++
        }

        right++
        count += left
    }

    return count
}
