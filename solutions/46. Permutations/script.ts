import {arrayOf} from "../../common/array-factories"

export {permute}

function permute(nums: number[]): number[][] {
    const result: number[][] = []
    const used: boolean[] = arrayOf(false, nums.length)

    backtrack(result, nums, used, [])

    return result
}

function backtrack(result: number[][], nums: number[], used: boolean[], current: number[]): void {
    if (current.length === nums.length) {
        result.push([...current])
        return
    }

    for (let i: number = 0; i < nums.length; i++) {
        if (used[i]) {
            continue
        }

        used[i] = true
        current.push(nums[i])

        backtrack(result, nums, used, current)

        current.pop()
        used[i] = false
    }
}
