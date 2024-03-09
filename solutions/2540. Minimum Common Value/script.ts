export {getCommon}

function getCommon(nums1: number[], nums2: number[]): number {
    for (const num of nums1) {
        if (nums2.includes(num)) {
            return num
        }
    }

    throw new Error("Illegal state. No common")
}
