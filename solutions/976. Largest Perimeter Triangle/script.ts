export {largestPerimeter}

function largestPerimeter(nums: number[]): number {
    nums.sort((a: number, b: number): number => a - b)

    for (let i: number = nums.length - 3; i >= 0; --i) {
        if (nums[i] + nums[i + 1] > nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2]
        }
    }

    return 0
}
