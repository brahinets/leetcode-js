export {minOperations}

function minOperations(nums: number[]): number {
    let count: number = 0
    for (let i: number = 2; i < nums.length; i++) {
        if (nums[i - 2] == 0) {
            count++
            nums[i - 2] = nums[i - 2] ^ 1
            nums[i - 1] = nums[i - 1] ^ 1
            nums[i] = nums[i] ^ 1
        }
    }

    let sum: number = 0
    for (let num of nums) {
        sum += num
    }

    if (sum == nums.length) {
        return count
    } else {
        return -1
    }
}
