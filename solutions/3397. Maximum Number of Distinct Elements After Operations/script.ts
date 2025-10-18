export {maxDistinctElements}

function maxDistinctElements(nums: number[], k: number): number {
    nums.sort((a: number, b: number): number => a - b)

    let count: number = 0
    let previous: number = -Number.MAX_SAFE_INTEGER

    for (const num of nums) {
        const current: number = Math.min(Math.max(num - k, previous + 1), num + k)

        if (current > previous) {
            count++
            previous = current
        }
    }

    return count
}
