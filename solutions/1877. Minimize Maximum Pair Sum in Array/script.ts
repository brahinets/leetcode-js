export {minPairSum}

function minPairSum(nums: number[]): number {
    nums.sort((a: number, b: number): number => a - b)

    let result: number = 0
    for (let i: number = 0; i < nums.length / 2; i++) {
        result = Math.max(result, nums[i] + nums[nums.length - 1 - i])
    }

    return result
}
