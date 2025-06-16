export {maximumDifference}

function maximumDifference(nums: number[]): number {
    let maxDiff: number = -1
    let minElement: number = nums[0]

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] < minElement) {
            minElement = nums[i]
        } else {
            maxDiff = Math.max(maxDiff, nums[i] - minElement)
        }
    }

    return maxDiff
}
