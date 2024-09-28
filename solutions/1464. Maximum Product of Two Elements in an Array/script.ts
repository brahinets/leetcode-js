export {maxProduct}

function maxProduct(nums: number[]): number {
    nums = nums.sort((a: number, b: number): number => b - a)

    return (nums[0] - 1) * (nums[1] - 1)
}
