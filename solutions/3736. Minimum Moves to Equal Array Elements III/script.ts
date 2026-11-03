export { minMoves }

function minMoves(nums: number[]): number {
    let maximum: number = nums[0]
    for (const num of nums) {
        if (num > maximum) {
            maximum = num
        }
    }

    let result: number = 0
    for (const num of nums) {
        result += maximum - num
    }
    return result
}
