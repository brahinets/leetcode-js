import {arrayOfZeros} from "../../common/array-factories"

export {countPartitions}

const MOD: number = 1e9 + 7

function countPartitions(nums: number[], k: number): number {
    const n: number = nums.length
    const dp: number[] = arrayOfZeros(n + 1)
    const prefixSum: number[] = arrayOfZeros(n + 1)
    const window: number[] = []
    const frequencyMap: Map<number, number> = new Map<number, number>()

    dp[0] = 1
    prefixSum[0] = 1
    let left: number = 0

    for (let right: number = 0; right < n; right++) {
        insertSorted(window, nums[right])

        frequencyMap.set(nums[right], (frequencyMap.get(nums[right]) || 0) + 1)

        while (left <= right && window[window.length - 1] - window[0] > k) {
            removeSorted(window, nums[left])

            frequencyMap.set(nums[left], frequencyMap.get(nums[left])! - 1)

            left++
        }

        dp[right + 1] = (prefixSum[right] - (left > 0 ? prefixSum[left - 1] : 0) + MOD) % MOD

        prefixSum[right + 1] = (prefixSum[right] + dp[right + 1]) % MOD
    }

    return dp[n]
}

function insertSorted(window: number[], num: number): void {
    let l: number = 0
    let r: number = window.length

    while (l < r) {
        const m: number = Math.floor((l + r) / 2)
        if (window[m] < num) {
            l = m + 1
        } else {
            r = m
        }
    }

    window.splice(l, 0, num)
}

function removeSorted(window: number[], num: number): void {
    let l: number = 0
    let r: number = window.length

    while (l < r) {
        const m: number = Math.floor((l + r) / 2)

        if (window[m] < num) {
            l = m + 1
        } else {
            r = m
        }
    }

    if (window[l] === num) {
        window.splice(l, 1)
    }
}
