export {getCommon}

function getCommon(nums1: number[], nums2: number[]): number {
    const set2: Set<number> = new Set<number>(nums2)

    for (const num of nums1) {
        if (set2.has(num)) {
            return num
        }
    }

    throw new Error("Illegal state. No common")
}
