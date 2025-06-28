import {binarySearch} from "../../common/array-utils"

export {numSubseq}

const MOD: number = 1e9 + 7

function numSubseq(nums: number[], target: number): number {
    nums = nums.sort((a: number, b: number): number => a - b)

    const power: number[] = calculatePowers(nums.length, MOD)

    let answer: number = 0
    for (let left: number = 0; left < nums.length; left++) {
        const right: number = binarySearch(nums, target - nums[left]) - 1

        if (left <= right) {
            const validCombinationsBetween: number = power[right - left]
            answer = (answer + validCombinationsBetween) % MOD
        }
    }

    return answer
}

function calculatePowers(nums: number, mod: number): number[] {
    const power: number[] = [1]

    for (let i: number = 1; i < nums; i++) {
        power[i] = (power[i - 1] * 2) % mod
    }

    return power
}
