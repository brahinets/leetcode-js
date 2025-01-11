import {binarySearch} from "../../common/array-utils"

export {numSubseq}

function numSubseq(nums: number[], target: number): number {
    nums = nums.sort((a: number, b: number): number => a - b)

    const mod: number = 1e9 + 7
    const power: number[] = calculatePowers(nums.length, mod)

    let answer: number = 0
    for (let left: number = 0; left < nums.length; left++) {
        const right: number = binarySearch(nums, target - nums[left]) - 1
        if (left <= right) {
            const validCombinationsBetween: number = power[right - left]
            answer = (answer + validCombinationsBetween) % mod
        }
    }

    return answer
}

function calculatePowers(nums: number, mod: number): number[] {
    const power: number[] = new Array<number>()
    power.push(1)
    for (let i: number = 1; i < nums; i++) {
        power[i] = (power[i - 1] * 2) % mod
    }
    return power
}
