export {searchRange}

function searchRange(nums: number[], target: number): number[] {
    const position: number = search(nums, target)

    if (position === -1) {
        return [-1, -1]
    }

    const start: number = position
    let end: number = position

    while (end + 1 < nums.length) {
        if (nums[end + 1] === target) {
            end++
        } else {
            break
        }
    }

    return [start, end]
}

function search(nums: number[], target: number): number {
    let left: number = 0
    let right: number = nums.length

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return -1
}
