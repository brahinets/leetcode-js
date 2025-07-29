import {arrayOf, arrayOfZeros} from "../../common/array-factories"

export {smallestSubarrays}

function smallestSubarrays(nums: number[]): number[] {
    const result: number[] = arrayOfZeros(nums.length)
    const lastSeen: number[] = arrayOf(-1, 32)

    for (let i: number = nums.length - 1; i >= 0; i--) {
        for (let j: number = 0; j < 32; j++) {
            if ((nums[i] & (1 << j)) !== 0) {
                lastSeen[j] = i
            }
        }

        result[i] = lastSeen.reduce((acc: number, val: number): number => Math.max(acc, val - i + 1), 1)
    }

    return result
}
