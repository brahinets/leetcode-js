export {minOperations}

function minOperations(nums: number[], k: number): number {
    nums.sort((x: number, y: number): number => x - y)

    const merged: number[] = []
    let result: number = 0
    let y: number = 0
    let sum: number = 0
    let operations: number = 0
    let i: number = 0
    let j: number = 0
    while (sum < k) {
        if (i < nums.length && !(nums[i] > merged[j])) {
            sum = nums[i++]
        } else {
            sum = merged[j++]
        }

        result = operations

        if (i < nums.length && !(nums[i] > merged[j])) {
            y = nums[i++]
        } else {
            y = merged[j++]
        }

        merged.push(sum * 2 + y)

        operations++
    }

    return result
}
