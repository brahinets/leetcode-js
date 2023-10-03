export {numIdenticalPairs}

function numIdenticalPairs(nums: number[]): number {
    let goodPairs: number = 0

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = 0; j < nums.length; j++) {
            if (isGoodPair(nums, i, j)) {
                goodPairs++
            }
        }
    }

    return goodPairs
}

function isGoodPair(nums: number[], i: number, j: number): boolean {
    return i < j && nums[i] === nums[j]
}
