export {longestMonotonicSubarray}

function longestMonotonicSubarray(nums: number[]): number {
    let max: number = 1
    let current: number = 1
    let isIncreasing: boolean = nums[1] > nums[0]

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            current = 1
        } else if (isIncreasing === nums[i] > nums[i - 1]) {
            current++
        } else {
            isIncreasing = !isIncreasing
            current = 2
        }

        max = Math.max(max, current)
    }

    return max
}
