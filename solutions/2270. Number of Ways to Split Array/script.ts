export {waysToSplitArray}

function waysToSplitArray(nums: number[]): number {
    const prefSum: number[] = [nums[0]]
    for (let i: number = 1; i < nums.length; i++) {
        prefSum[i] = prefSum[i - 1] + nums[i]
    }

    let count: number = 0
    for (let i: number = 0; i < nums.length - 1; i++) {
        let leftSum: number = prefSum[i]
        let rightSum: number = prefSum[nums.length - 1] - prefSum[i]

        if (leftSum >= rightSum) {
            count++
        }
    }

    return count
}
