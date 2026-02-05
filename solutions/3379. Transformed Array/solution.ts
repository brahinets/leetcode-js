export { constructTransformedArray }

function constructTransformedArray(nums: number[]): number[] {
    const n: number = nums.length
    const result: number[] = new Array(n)

    for (let i: number = 0; i < n; i++) {
        if (nums[i] === 0) {
            result[i] = 0
        } else {
            const targetIndex: number = ((i + nums[i]) % n + n) % n
            result[i] = nums[targetIndex]
        }
    }

    return result
}
