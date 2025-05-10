export {minSum}

function minSum(nums1: number[], nums2: number[]): number {
    const zerosInFirst: number = nums1.filter((i: number): boolean => i === 0).length
    const zerosInSecond: number = nums2.filter((i: number): boolean => i === 0).length

    const sumOfFirst: number = nums1.reduce((sum: number, val: number): number => sum + val, 0)
    const sumOfSecond: number = nums2.reduce((sum: number, val: number): number => sum + val, 0)

    const maxSumOfFirst: number = sumOfFirst + zerosInFirst
    const maxSumOfSecond: number = sumOfSecond + zerosInSecond

    if ((zerosInFirst === 0 && maxSumOfSecond > maxSumOfFirst) || (zerosInSecond === 0 && maxSumOfFirst > maxSumOfSecond)) {
        return -1
    }

    return Math.max(maxSumOfFirst, maxSumOfSecond)
}
