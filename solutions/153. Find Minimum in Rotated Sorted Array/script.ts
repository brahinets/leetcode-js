export {findMin}

function findMin(nums: number[]): number {
    let left: number = 0
    let right: number = nums.length - 1

    while (left < right) {
        const mid: number = left + Math.floor((right - left) / 2)

        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return nums[left]
}
