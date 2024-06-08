export {checkSubarraySum}

const MIN_GOOD_LENGTH: number = 2

function checkSubarraySum(nums: number[], k: number): boolean {
    return window(nums, k) > 0
}

function window(nums: number[], k: number): number {
    const prefixSums: Map<number, number> = new Map<number, number>([[0, -1]])

    let count: number = 0

    let currentSum: number = 0
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i]
        const remainder: number = currentSum % k

        if (prefixSums.has(remainder)) {
            const previousIndex: number = prefixSums.get(remainder)!

            if (i - previousIndex >= MIN_GOOD_LENGTH) {
                count++
            }
        } else {
            prefixSums.set(remainder, i)
        }
    }

    return count
}
