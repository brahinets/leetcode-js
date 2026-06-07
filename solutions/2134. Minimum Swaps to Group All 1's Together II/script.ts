import {sum} from "../../common/array-utils"

export {minSwaps}

function minSwaps(nums: number[]): number {
    const totalOnes: number = sum(nums)

    let swaps: number = Number.MAX_SAFE_INTEGER
    let onesInWindow: number = nums[0]
    let right: number = 0

    for (let left = 0; left < nums.length; left++) {
        if (left > 0) {
            onesInWindow -= nums[left - 1]
        }

        while (right - left + 1 < totalOnes) {
            right++
            onesInWindow += nums[right % nums.length]
        }

        swaps = Math.min(swaps, totalOnes - onesInWindow)
    }

    return swaps
}
