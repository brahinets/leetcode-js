import {arrayOfZeros} from "../../common/array-factories"

export {maxSumOfThreeSubarrays}

function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
    const sums: number[] = calculatePrefixSums(nums)
    const left: number[] = calculateLeftMaxSubarraySums(sums, k)
    const right: number[] = calculateRightMaxSubarraySums(sums, k)

    return findMaxSumOfThreeSubarrays(sums, left, right, k)
}

function calculatePrefixSums(nums: number[]): number[] {
    const sums: number[] = arrayOfZeros(nums.length + 1)

    for (let i: number = 0; i < nums.length; i++) {
        sums[i + 1] = sums[i] + nums[i]
    }

    return sums
}

function calculateLeftMaxSubarraySums(sums: number[], k: number): number[] {
    const left: number[] = arrayOfZeros(sums.length - 1)

    let total: number = sums[k] - sums[0]
    for (let i: number = k; i < sums.length - 1; i++) {
        const sum: number = sums[i + 1] - sums[i + 1 - k]

        if (sum > total) {
            left[i] = i + 1 - k
            total = sum
        } else {
            left[i] = left[i - 1]
        }
    }

    return left
}

function calculateRightMaxSubarraySums(sums: number[], k: number): number[] {
    let total: number = sums[sums.length - 1] - sums[sums.length - 1 - k]

    const right: number[] = arrayOfZeros(sums.length - 1)
    right[sums.length - 1 - k] = sums.length - 1 - k

    for (let i: number = sums.length - 1 - k - 1; i >= 0; i--) {
        const sum: number = sums[i + k] - sums[i]

        if (sum >= total) {
            right[i] = i
            total = sum
        } else {
            right[i] = right[i + 1]
        }
    }

    return right
}

function findMaxSumOfThreeSubarrays(sums: number[], left: number[], right: number[], k: number): number[] {
    let maxSum: number = 0

    let result: number[] = []
    for (let i: number = k; i <= sums.length - 1 - 2 * k; i++) {
        const l: number = left[i - 1]
        const r: number = right[i + k]
        const sum: number = (sums[i + k] - sums[i]) + (sums[l + k] - sums[l]) + (sums[r + k] - sums[r])

        if (sum > maxSum) {
            maxSum = sum
            result = [l, i, r]
        }
    }

    return result
}
