export {subsetsWithDup}

function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a: number, b: number): number => a - b)

    const result: number[][] = []

    generateSubsets(nums, 0, [], result)

    return result
}

function generateSubsets(
    nums: number[],
    startIndex: number,
    currentSubset: number[],
    result: number[][]
): void {
    result.push([...currentSubset])

    for (let i: number = startIndex; i < nums.length; i++) {
        if (i > startIndex && nums[i] === nums[i - 1]) {
            continue
        }

        currentSubset.push(nums[i])

        generateSubsets(nums, i + 1, currentSubset, result)

        currentSubset.pop()
    }
}
