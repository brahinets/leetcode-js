export {containsDuplicate}

function containsDuplicate(nums: number[]): boolean {
    const counts: Set<number> = new Set<number>()

    for (const num of nums) {
        if (counts.has(num)) {
            return true
        } else {
            counts.add(num)
        }
    }

    return false
}
