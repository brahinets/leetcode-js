export {minimizeMax}

function minimizeMax(nums: number[], p: number): number {
    if (p === 0 || nums.length === 0) {
        return 0
    }

    nums.sort((n1: number, n2: number): number => n1 - n2)

    let left: number = 0
    let right: number = Math.max(...nums) - Math.min(...nums)
    let threshold: number = 0

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2)

        if (countPairsWithDelta(nums, mid) >= p) {
            right = mid - 1
            threshold = mid
        } else {
            left = mid + 1
        }
    }

    return threshold
}

function countPairsWithDelta(nums: number[], value: number): number {
    let i: number = 0
    let count: number = 0

    while (i < nums.length - 1) {
        if (nums[i + 1] - nums[i] <= value) {
            count++
            i = i + 2
        } else {
            i = i + 1
        }
    }

    return count
}
