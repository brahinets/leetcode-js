import { arrayOf } from '../../common/array-factories'
import { first } from '../../common/array-utils'

export { maximumGap }

function maximumGap(nums: number[]): number {
    if (nums.length < 2) {
        return 0
    }

    const minVal: number = Math.min(...nums)
    const maxVal: number = Math.max(...nums)

    if (minVal === maxVal) {
        return 0
    }

    const bucketSize: number = getBucketSize(minVal, maxVal, nums.length)
    const bucketCount: number = Math.floor((maxVal - minVal) / bucketSize) + 1
    const [bucketMin, bucketMax] = fillBuckets(nums, minVal, bucketSize, bucketCount)

    return findMaxGap(bucketMin, bucketMax, bucketCount)
}

function getBucketSize(minVal: number, maxVal: number, n: number): number {
    return Math.max(1, Math.floor((maxVal - minVal) / (n - 1)))
}

function fillBuckets(
    nums: number[],
    minVal: number,
    bucketSize: number,
    bucketCount: number,
): [number[], number[]] {
    const bucketMin: number[] = arrayOf(Infinity, bucketCount)
    const bucketMax: number[] = arrayOf(-Infinity, bucketCount)

    for (const num of nums) {
        const idx: number = Math.floor((num - minVal) / bucketSize)
        bucketMin[idx] = Math.min(bucketMin[idx], num)
        bucketMax[idx] = Math.max(bucketMax[idx], num)
    }

    return [bucketMin, bucketMax]
}

function findMaxGap(bucketMin: number[], bucketMax: number[], bucketCount: number): number {
    let maxGap: number = 0
    let prevMax: number = first(bucketMax)!

    for (let i: number = 1; i < bucketCount; i++) {
        if (bucketMin[i] === Infinity) {
            continue
        }
        maxGap = Math.max(maxGap, bucketMin[i] - prevMax)
        prevMax = bucketMax[i]
    }

    return maxGap
}
