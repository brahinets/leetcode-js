export {xorAllNums}

function xorAllNums(nums1: number[], nums2: number[]): number {
    const frequencies: Map<number, number> = collectFrequencies(nums1, nums2)

    let result: number = 0
    for (const num of frequencies.keys()) {
        if (frequencies.get(num)! % 2 == 1) {
            result ^= num
        }
    }

    return result
}

function collectFrequencies(nums1: number[], nums2: number[]): Map<number, number> {
    const frequencies: Map<number, number> = new Map<number, number>()

    for (let num of nums1) {
        frequencies.set(num, (frequencies.get(num) ?? 0) + nums2.length)
    }

    for (let num of nums2) {
        frequencies.set(num, (frequencies.get(num) ?? 0) + nums1.length)
    }

    return frequencies
}
