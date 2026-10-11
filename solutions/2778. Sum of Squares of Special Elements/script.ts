export { sumOfSquares }

function sumOfSquares(nums: number[]): number {
    const length: number = nums.length
    let sum: number = 0

    for (let position: number = 1; position <= length; position++) {
        if (length % position === 0) {
            sum += nums[position - 1] * nums[position - 1]
        }
    }

    return sum
}
