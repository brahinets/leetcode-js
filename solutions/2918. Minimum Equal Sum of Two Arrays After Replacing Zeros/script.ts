export {minSum}

function minSum(nums1: number[], nums2: number[]): number {
    const zerosInFirst = nums1.filter((i: number): boolean => i === 0).length
    const zerosInSecond = nums2.filter((i: number): boolean => i === 0).length

    const sumOfFirst = nums1.reduce((sum: number, val: number): number => sum + val, 0) + zerosInFirst
    const sumOfSecond = nums2.reduce((sum: number, val: number): number => sum + val, 0) + zerosInSecond

    if ((zerosInFirst === 0 && sumOfSecond > sumOfFirst) || (zerosInSecond === 0 && sumOfFirst > sumOfSecond)) {
        return -1
    }

    return Math.max(sumOfFirst, sumOfSecond)
}
