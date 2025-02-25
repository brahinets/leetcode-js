export {getFinalState}

function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    for (let j: number = 0; j < k; j++) {
        let minIndex: number = 0

        for (let i: number = 0; i < nums.length; i++) {
            if (nums[i] < nums[minIndex]) {
                minIndex = i
            }
        }

        nums[minIndex] *= multiplier
    }

    return nums
}
