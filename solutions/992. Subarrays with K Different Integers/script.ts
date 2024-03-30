export {subarraysWithKDistinct}


function subarraysWithKDistinct(nums: number[], k: number): number {
    return window(nums, k) - window(nums, k - 1)
}

function window(nums: number[], k: number): number {
    const frequencies: Map<number, number> = new Map<number, number>()
    let count: number = 0
    let left: number = 0
    let right: number = 0

    while (right < nums.length) {
        frequencies.set(nums[right], (frequencies.get(nums[right]) ?? 0) + 1)

        while (frequencies.size > k) {
            let current: number = frequencies.get(nums[left])!
            if (current === 1) {
                frequencies.delete(nums[left])
            } else {
                frequencies.set(nums[left], current - 1)
            }

            left++
        }

        count += right - left + 1
        right++
    }

    return count
}
