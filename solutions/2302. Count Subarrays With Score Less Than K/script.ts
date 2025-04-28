export {countSubarrays}

function countSubarrays(nums: number[], k: number): number {
    let left: number = 0
    let right: number = 0
    let sum: number = 0
    let count: number = 0

    while (right < nums.length) {
        sum += nums[right]

        while (sum * (right - left + 1) >= k) {
            sum -= nums[left]
            left++
        }

        count += right - left + 1
        right++
    }

    return count
}
