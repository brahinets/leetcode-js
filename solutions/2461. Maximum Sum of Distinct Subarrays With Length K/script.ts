export {maximumSubarraySum}

function maximumSubarraySum(nums: number[], k: number): number {
    let ans: number = 0
    let currentSum: number = 0
    let begin: number = 0
    let end: number = 0

    const numToIndex: Map<number, number> = new Map<number, number>()
    while (end < nums.length) {
        let currNum: number = nums[end]
        let lastOccurrence: number = numToIndex.get(currNum) ?? -1

        while (begin <= lastOccurrence || end - begin + 1 > k) {
            currentSum -= nums[begin]
            begin++
        }

        numToIndex.set(currNum, end)
        currentSum += nums[end]

        if (end - begin + 1 == k) {
            ans = Math.max(ans, currentSum)
        }

        end++
    }

    return ans
}
