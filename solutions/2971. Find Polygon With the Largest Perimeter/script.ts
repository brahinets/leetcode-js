export {largestPerimeter}

function largestPerimeter(nums: number[]): number {
    nums = nums.sort((a: number, b: number): number => a - b)

    let prev: number = 0
    let result: number = -1
    for (const num of nums) {
        if (num < prev) {
            result = prev + num
        }

        prev += num
    }

    return result
}
