export {numSubarrayProductLessThanK}

function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k <= 1) {
        return 0
    }

    let count: number = 0
    let product: number = 1

    let left: number = 0
    let right: number = 0
    while (right < nums.length) {
        product *= nums[right]

        while (product >= k) {
            product /= nums[left]
            left++
        }

        count += right - left + 1
        right++
    }

    return count

}
