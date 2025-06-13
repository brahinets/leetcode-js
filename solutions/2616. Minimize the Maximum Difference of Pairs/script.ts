export {minimizeMax}

function minimizeMax(nums: number[], p: number): number {
    if (p === 0 || nums.length === 0) {
        return 0
    }

    nums.sort((a: number, b: number): number => a - b)

    let left: number = 0
    let right: number = nums[nums.length - 1] - nums[0]
    let answer: number = 0

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2)

        if (countValidPairs(nums, mid) >= p) {
            answer = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return answer
}

function countValidPairs(nums: number[], maxDiff: number): number {
    let count: number = 0
    let i: number = 0

    while (i < nums.length - 1) {
        if (nums[i + 1] - nums[i] <= maxDiff) {
            count++
            i += 2
        } else {
            i++
        }
    }

    return count
}
