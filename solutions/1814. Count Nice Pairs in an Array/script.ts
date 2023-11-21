import {reverse} from "../7. Reverse Integer/script";

export {countNicePairs}

const MOD: number = 10 ** 9 + 7

function countNicePairs(nums: number[]): number {
    let nicePairs: number = 0

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = 0; j < nums.length; j++) {
            if (isNicePair(nums, i, j)) {
                nicePairs = (nicePairs + 1 % MOD)
            }
        }
    }

    return nicePairs
}

function isNicePair(nums: number[], i: number, j: number): boolean {
    return i < j && nums[i] + reverse(nums[j]) === nums[j] + reverse(nums[i])
}
