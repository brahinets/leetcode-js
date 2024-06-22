export {subarraySum}

function subarraySum(nums: number[], k: number): number {
    let subArrays: number = 0

    for (let start = 0; start < nums.length; start++) {
        for (let end = start + 1; end <= nums.length; end++) {
            let sum: number = 0
            for (let i = start; i < end; i++) {
                sum += nums[i]
            }

            if (sum === k) {
                subArrays++
            }
        }
    }

    return subArrays
}
