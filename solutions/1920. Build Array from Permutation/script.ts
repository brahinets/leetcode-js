export {buildArray}

function buildArray(nums: number[]): number[] {
    const result: number[] = []

    for (const num of nums) {
        result.push(nums[num])
    }

    return result
}
