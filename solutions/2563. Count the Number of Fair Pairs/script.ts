export {countFairPairs}

function countFairPairs(nums: number[], lower: number, upper: number): number {
    nums.sort((a: number, b: number): number => a - b)

    return lowerBound(nums, upper + 1) - lowerBound(nums, lower)
}

function lowerBound(nums: number[], value: number): number {
    let left: number = 0
    let right: number = nums.length - 1
    let result: number = 0

    while (left < right) {
        const sum: number = nums[left] + nums[right]

        if (sum < value) {
            result += right - left
            left++
        } else {
            right--
        }
    }

    return result
}
