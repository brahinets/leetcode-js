export {subsets}

function subsets(nums: number[]): number[][] {
    const subsets: number[][] = [[]]

    for (const num of nums) {
        const newSubsets: number[][] = []

        for (const subset of subsets) {
            newSubsets.push([...subset, num])
        }

        subsets.push(...newSubsets)
    }

    return subsets
}
