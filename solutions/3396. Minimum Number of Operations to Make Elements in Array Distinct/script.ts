export {minimumOperations}

function minimumOperations(nums: number[]): number {
    let operations: number = 0

    for (let i: number = 0; i < nums.length; i += 3, operations++) {
        if (checkUnique(nums, i)) {
            return operations
        }
    }

    return operations
}

function checkUnique(nums: number[], start: number): boolean {
    const count: Set<number> = new Set<number>()

    for (let i: number = start; i < nums.length; i++) {
        if (count.has(nums[i])) {
            return false
        }

        count.add(nums[i])
    }

    return true
}
