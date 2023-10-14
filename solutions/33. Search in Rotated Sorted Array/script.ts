export {search}

function search(nums: number[], target: number): number {
    let left: number = 0
    let right: number = nums.length - 1

    while (left <= right) {
        const mid: number = Math.floor((right + left) / 2)

        if (nums[mid] === target) {
            return mid
        }

        if (nums[mid] >= nums[left]) {
            if (target > nums[mid] || target < nums[left]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } else if (nums[mid] <= nums[right]) {
            if (target > nums[right] || target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }

    return -1
}
