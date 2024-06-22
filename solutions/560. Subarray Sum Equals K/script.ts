export {subarraySum}

function subarraySum(nums: number[], k: number): number {
    let subArrays: number = 0

    for (let start = 0; start < nums.length; start++) {
        let sum: number = 0

        for (let end = start; end < nums.length; end++) {
            sum += nums[end]

            if (sum === k) {
                subArrays++
            }
        }
    }

    return subArrays
}
