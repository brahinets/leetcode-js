export {minSum}

function minSum(nums1: number[], nums2: number[]): number {
    const zerosInFirst: number = nums1.filter((i: number): boolean => i === 0).length
    const zerosInSecond: number = nums2.filter((i: number): boolean => i === 0).length

    const sumOfFirst: number = nums1.reduce((sum: number, val: number): number => sum + val, 0) + zerosInFirst
    const sumOfSecond: number = nums2.reduce((sum: number, val: number): number => sum + val, 0) + zerosInSecond

    if ((zerosInFirst === 0 && sumOfSecond > sumOfFirst) || (zerosInSecond === 0 && sumOfFirst > sumOfSecond)) {
        return -1
    }

    return Math.max(sumOfFirst, sumOfSecond)
}
