export {twoSum}

const twoSum = (nums: number[], target: number): number[] => {
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = 0; j < nums.length; j++) {
            if (i === j) {
                continue
            }

            if ((nums[i] + nums[j]) === target) {
                return [i, j]
            }
        }
    }

    throw new Error("Match not found")
}
