export {kthSmallestProduct}

function kthSmallestProduct(nums1: number[], nums2: number[], k: number): number {
    let left: number = -1e10
    let right: number = 1e10

    nums2.sort((a: number, b: number): number => a - b)

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)

        if (countLessEqual(nums1, nums2, mid) < k) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left
}

function countLessEqual(nums1: number[], nums2: number[], target: number): number {
    let count: number = 0

    for (const num1 of nums1) {
        if (num1 === 0) {
            if (target >= 0) {
                count += nums2.length
            }
        } else if (num1 > 0) {
            let left: number = 0
            let right: number = nums2.length

            while (left < right) {
                const mid: number = (left + right) >> 1

                if (num1 * nums2[mid] <= target) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }

            count += left
        } else {
            let left: number = 0
            let right: number = nums2.length

            while (left < right) {
                const mid: number = (left + right) >> 1

                if (num1 * nums2[mid] <= target) {
                    right = mid
                } else {
                    left = mid + 1
                }
            }

            count += nums2.length - left
        }
    }

    return count
}
