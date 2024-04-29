import {hammingWeight} from "../191. Number of 1 Bits/script"

export {minOperations}

function minOperations(nums: number[], k: number): number {
    return hammingWeight(nums.reduce((xor: number, num: number): number => xor ^ num, 0) ^ k)
}
