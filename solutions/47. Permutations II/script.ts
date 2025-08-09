import {arrayOf} from "../../common/array-factories";

export {permuteUnique}

function permuteUnique(nums: number[]): number[][] {
    nums.sort((a: number, b: number): number => a - b)

    const result: number[][] = []
    const used: boolean[] = arrayOf(false, nums.length)

    backtrack([], nums, used, result)

    return result
}

function backtrack(path: number[], nums: number[], used: boolean[], result: number[][]): void {
    if (path.length === nums.length) {
        result.push([...path])
        return
    }

    for (let i: number = 0; i < nums.length; i++) {
        if (used[i]) {
            continue
        }

        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
            continue
        }

        used[i] = true
        path.push(nums[i])
        backtrack(path, nums, used, result)
        path.pop()
        used[i] = false
    }
}
