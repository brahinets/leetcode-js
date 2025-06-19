export {partitionArray}

function partitionArray(nums: number[], k: number): number {
    nums.sort((a: number, b: number): number => a - b)

    let count: number = 0
    let min: number = nums[0]

    for (const num of nums) {
        if (num - min > k) {
            count++

            min = num
        }
    }

    return count + 1
}
