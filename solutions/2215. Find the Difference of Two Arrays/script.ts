export {findDifference}

function findDifference(nums1: number[], nums2: number[]): number[][] {
    return [getUnique(nums1, nums2), getUnique(nums2, nums1)]
}

function getUnique(src: number[], target: number[]): number[] {
    let unique: Set<number> = new Set<number>()

    for (const elem of src) {
        if (target.includes(elem)) {
            continue
        }

        unique.add(elem)
    }

    return [...unique]
}
