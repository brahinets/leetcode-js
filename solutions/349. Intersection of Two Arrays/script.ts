export {intersection}

function intersection(nums1: number[], nums2: number[]): number[] {
    const result: Set<number> = new Set<number>()
    const set2: Set<number> = new Set<number>(nums2)

    for (const num of nums1) {
        if (set2.has(num)) {
            result.add(num)
        }
    }

    return [...result]
}
