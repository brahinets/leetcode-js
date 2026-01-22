export {minimumPairRemoval}

function minimumPairRemoval(nums: number[]): number {
    let operations = 0

    while (!isNonDecreasing(nums)) {
        const minIdx = findMinSumPairIndex(nums)
        const sum = nums[minIdx] + nums[minIdx + 1]
        nums.splice(minIdx, 2, sum)
        operations++
    }

    return operations
}

function isNonDecreasing(nums: number[]): boolean {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            return false
        }
    }
    return true
}

function findMinSumPairIndex(nums: number[]): number {
    let minSum = Infinity
    let minIdx = 0

    for (let i = 0; i < nums.length - 1; i++) {
        const sum = nums[i] + nums[i + 1]
        if (sum < minSum) {
            minSum = sum
            minIdx = i
        }
    }

    return minIdx
}