export { minimumCost }

function minimumCost(nums: number[]): number {
    let smallest: number = Infinity
    let secondSmallest: number = Infinity

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < smallest) {
            secondSmallest = smallest
            smallest = nums[i]
        } else if (nums[i] < secondSmallest) {
            secondSmallest = nums[i]
        }
    }

    return nums[0] + smallest + secondSmallest
}
