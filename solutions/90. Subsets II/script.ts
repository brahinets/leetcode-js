export {subsetsWithDup}

function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a: number, b: number): number => a - b)

    const result: number[][] = []
    const subset: number[] = []

    function backtrack(start: number): void {
        result.push([...subset])

        for (let i: number = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue

            }
            subset.push(nums[i])

            backtrack(i + 1)

            subset.pop()
        }
    }

    backtrack(0)

    return result
}
