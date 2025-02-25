export {minIncrementForUnique}

function minIncrementForUnique(nums: number[]): number {
    const sortedNums: number[] = nums.sort((a: number, b: number): number => a - b)

    let moves: number = 0
    for (let i = 1; i < sortedNums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            moves += (nums[i - 1] + 1 - nums[i])

            nums[i] = nums[i - 1] + 1
        }
    }

    return moves
}
