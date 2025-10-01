export {removeDuplicates}

function removeDuplicates(nums: number[]): number {
    let numsLeft: number = 2

    for (let i: number = 2; i < nums.length; i++) {
        if (nums[i] !== nums[numsLeft - 2]) {
            nums[numsLeft++] = nums[i]
        }
    }

    return numsLeft
}
