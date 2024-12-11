export {maximumBeauty}

function maximumBeauty(nums: number[], k: number): number {
    nums.sort((a: number, b: number): number => a - b)

    let right: number = 0
    let maxBeauty: number = 0
    for (let left: number = 0; left < nums.length; left++) {
        while (right < nums.length && nums[right] - nums[left] <= 2 * k) {
            right++
        }

        maxBeauty = Math.max(maxBeauty, right - left)
    }

    return maxBeauty
}
