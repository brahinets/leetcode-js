export {removeDuplicates}

function removeDuplicates(nums: number[]): number {
    let j: number = 2

    for (let i: number = 2; i < nums.length; i++) {
        if (nums[i] !== nums[j - 2]) {
            nums[j++] = nums[i]
        }
    }

    return j
}
