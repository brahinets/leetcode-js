export {rearrangeArray}

function rearrangeArray(nums: number[]): number[] {
    const result: number[] = []

    let positive: number = 0
    let negative: number = 1
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result[positive] = nums[i]
            positive += 2
        } else {
            result[negative] = nums[i]
            negative += 2
        }
    }

    return result
}
