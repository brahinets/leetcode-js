export {longestSubarray}

function longestSubarray(nums: number[]): number {
    let max: number = 0
    let result: number = 0
    let currentStreak: number = 0

    for (const num of nums) {
        if (max < num) {
            max = num
            result = currentStreak = 0
        }

        if (max === num) {
            currentStreak++
        } else {
            currentStreak = 0
        }

        result = Math.max(result, currentStreak)
    }

    return result
}
