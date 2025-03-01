export {applyOperations}

function applyOperations(nums: number[]): number[] {
    let modifiedNums: number[] = []
    let zeroCount: number = 0

    for (let index: number = 0; index < nums.length - 1; index++) {
        if (nums[index] == nums[index + 1] && nums[index] != 0) {
            nums[index] *= 2
            nums[index + 1] = 0
        }
    }

    for (let num of nums) {
        if (num != 0) {
            modifiedNums[zeroCount++] = num
        }
    }
    while (zeroCount < nums.length) {
        modifiedNums[zeroCount++] = 0
    }

    return modifiedNums
}
