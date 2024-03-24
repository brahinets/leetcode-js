export {findDuplicate}

function findDuplicate(nums: number[]): number {
    const counts: Set<number> = new Set<number>()

    for (const num of nums) {
        if (counts.has(num)) {
            return num
        } else {
            counts.add(num)
        }
    }

    throw new Error("Duplicate not found")
}
