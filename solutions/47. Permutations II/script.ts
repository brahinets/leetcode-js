import {arrayOf} from "../../common/array-factories"

export {permuteUnique}

function permuteUnique(nums: number[]): number[][] {
    nums.sort((a: number, b: number): number => a - b)

    const used: boolean[] = arrayOf(false, nums.length)

    return backtrack([], nums, used)
}

function backtrack(path: number[], nums: number[], used: boolean[]): number[][] {
    if (path.length === nums.length) {
        return [[...path]]
    }

    let result: number[][] = []
    for (let i: number = 0; i < nums.length; i++) {
        if (used[i]) {
            continue
        }

        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
            continue
        }

        used[i] = true
        path.push(nums[i])
        result = result.concat(backtrack(path, nums, used))
        path.pop()
        used[i] = false
    }

    return result
}
