export {findPeakElement}

function findPeakElement(nums: number[]): number {
    let low: number = 0
    let high: number = nums.length - 1

    while (low < high) {
        const mid: number = Math.floor((low + high) / 2)

        if (nums[mid] < nums[mid + 1]) {
            low = mid + 1
        } else {
            high = mid
        }
    }

    return low
}
