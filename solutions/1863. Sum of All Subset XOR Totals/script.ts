export {subsetXORSum}

function subsetXORSum(nums: number[]): number {
    let result: number = 0

    for (const subset of getAllSubsets(nums)) {
        result += subset.reduce((xor: number, val: number): number => xor ^ val, 0)
    }

    return result
}

function getAllSubsets(nums: number[]): number[][] {
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
