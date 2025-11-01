export {merge}

function merge(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): void {
    let targetIndex: number = m - 1
    let sourceIndex: number = n - 1
    let mergeIndex: number = m + n - 1

    while (targetIndex >= 0 && sourceIndex >= 0) {
        if (nums1[targetIndex] > nums2[sourceIndex]) {
            nums1[mergeIndex] = nums1[targetIndex]
            targetIndex--
        } else {
            nums1[mergeIndex] = nums2[sourceIndex]
            sourceIndex--
        }

        mergeIndex--
    }

    while (sourceIndex >= 0) {
        nums1[mergeIndex] = nums2[sourceIndex]
        sourceIndex--
        mergeIndex--
    }
}
