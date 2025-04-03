export {maximumTripletValue}

function maximumTripletValue(nums: number[]): number {
    let max: number = 0

    let maxPrefixValue: number = 0
    let maxDifference: number = 0
    for (let index: number = 0; index < nums.length; index++) {
        max = Math.max(max, maxDifference * nums[index])
        maxDifference = Math.max(maxDifference, maxPrefixValue - nums[index])
        maxPrefixValue = Math.max(maxPrefixValue, nums[index])
    }

    return max
}
