import {arrayOfZeros} from "../../common/array-factories"

export {minimumSubarrayLength}

function minimumSubarrayLength(nums: number[], k: number): number {
    let minLength: number = Number.MAX_SAFE_INTEGER
    let windowStart: number = 0
    let windowEnd: number = 0

    const bitCounts: number[] = arrayOfZeros(32)
    while (windowEnd < nums.length) {
        updateBitCounts(bitCounts, nums[windowEnd], 1)

        while (windowStart <= windowEnd && convertBitCountsToNumber(bitCounts) >= k) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1)

            updateBitCounts(bitCounts, nums[windowStart], -1)
            windowStart++
        }

        windowEnd++
    }

    return minLength === Number.MAX_SAFE_INTEGER ? -1 : minLength
}

function updateBitCounts(bitCounts: number[], number: number, delta: number): void {
    for (let bitPosition: number = 0; bitPosition < 32; bitPosition++) {
        if (((number >> bitPosition) & 1) !== 0) {
            bitCounts[bitPosition] += delta
        }
    }
}

function convertBitCountsToNumber(bitCounts: number[]): number {
    let result = 0

    for (let bitPosition: number = 0; bitPosition < 32; bitPosition++) {
        if (bitCounts[bitPosition] !== 0) {
            result |= 1 << bitPosition
        }
    }

    return result
}
