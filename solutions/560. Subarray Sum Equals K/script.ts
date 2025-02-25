export {subarraySum}

function subarraySum(nums: number[], k: number): number {
    let sum: number = 0
    let subArrays: number = 0

    const prefixSum: Map<number, number> = new Map<number, number>([[0, 1]])
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        if (prefixSum.has(sum - k)) {
            subArrays += prefixSum.get(sum - k)!
        }

        prefixSum.set(sum, (prefixSum.get(sum) ?? 0) + 1)
    }

    return subArrays
}
