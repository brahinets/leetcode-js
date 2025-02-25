export {smallestDistancePair}

function smallestDistancePair(nums: number[], k: number): number {
    nums.sort((a: number, b: number): number => a - b)

    let low: number = 0
    let high: number = nums[nums.length - 1] - nums[0]
    while (low < high) {
        const mid: number = Math.floor((low + high) / 2)
        let count: number = 0
        let left: number = 0

        for (let right: number = 0; right < nums.length; right++) {
            while (nums[right] - nums[left] > mid) {
                left++
            }
            count += right - left
        }

        if (count >= k) {
            high = mid
        } else {
            low = mid + 1
        }
    }

    return low
}
