export {findDuplicates}

function findDuplicates(nums: number[]): number[] {
    const duplicates: number[] = []

    for (let i: number = 0; i < nums.length; i++) {
        const index: number = Math.abs(nums[i]) - 1

        if (nums[index] < 0) {
            duplicates.push(index + 1)
        }

        nums[index] = -nums[index]
    }

    return duplicates
}
