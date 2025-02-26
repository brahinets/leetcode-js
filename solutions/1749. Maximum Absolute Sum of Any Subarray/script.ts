export {maxAbsoluteSum}

function maxAbsoluteSum(nums: number[]): number {
    let maxSum: number = 0
    let minSum: number = 0
    let currentMax: number = 0
    let currentMin: number = 0

    for (const num of nums) {
        currentMax = Math.max(num, currentMax + num)
        maxSum = Math.max(maxSum, currentMax)

        currentMin = Math.min(num, currentMin + num)
        minSum = Math.min(minSum, currentMin)
    }

    return Math.max(maxSum, -minSum)
}
