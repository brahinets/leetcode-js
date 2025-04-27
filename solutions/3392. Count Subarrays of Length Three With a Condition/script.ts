export {countSubarrays}

function countSubarrays(nums: number[]): number {
    let count: number = 0

    for (let i: number = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] + nums[i + 1] === nums[i] / 2) {
            count++
        }
    }

    return count
}
