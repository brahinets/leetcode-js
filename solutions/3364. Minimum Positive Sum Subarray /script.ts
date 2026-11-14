export { minimumSumSubarray }

function minimumSumSubarray(nums: number[], l: number, r: number): number {
    let min: number = Number.MAX_SAFE_INTEGER
    let n: number = nums.length

    for (let length: number = l; length <= r; length++) {
        for (let i: number = 0; i + length <= n; i++) {
            let sum: number = 0

            for (let k: number = i; k < i + length; k++) {
                sum += nums[k]
            }

            if (sum > 0 && sum < min) {
                min = sum
            }
        }
    }

    return min == Number.MAX_SAFE_INTEGER ? -1 : min
}
