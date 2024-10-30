import {arrayOf} from "../../common/array-factories"

export {minimumMountainRemovals}

function minimumMountainRemovals(nums: number[]): number {
    const lis: number[] = arrayOf(1, nums.length)
    const lds: number[] = arrayOf(1, nums.length)

    for (let i: number = 1; i < nums.length; i++) {
        for (let j: number = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                lis[i] = Math.max(lis[i], lis[j] + 1)
            }
        }
    }

    for (let i: number = nums.length - 2; i >= 0; i--) {
        for (let j: number = nums.length - 1; j > i; j--) {
            if (nums[i] > nums[j]) {
                lds[i] = Math.max(lds[i], lds[j] + 1)
            }
        }
    }

    let res: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        if (lis[i] > 1 && lds[i] > 1) {
            res = Math.max(res, lis[i] + lds[i] - 1)
        }
    }

    return nums.length - res
}
