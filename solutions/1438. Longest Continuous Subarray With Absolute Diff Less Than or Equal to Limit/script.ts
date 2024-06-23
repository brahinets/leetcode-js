import {first, last} from "../../common/array-utils";

export {longestSubarray}

function longestSubarray(nums: number[], limit: number): number {
    let maxLength: number = 0
    let start: number = 0

    const max: number[] = []
    const min: number[] = []
    for (let end = 0; end < nums.length; end++) {
        while (max.length > 0 && nums[end] > nums[last(max)!]) {
            max.pop()
        }
        max.push(end)

        while (min.length > 0 && nums[end] < nums[last(min)!]) {
            min.pop()
        }
        min.push(end)

        while (nums[first(max)!] - nums[first(min)!] > limit) {
            if (first(max)! === start) {
                max.shift()
            }
            if (first(min)! === start) {
                min.shift()
            }
            start++
        }

        maxLength = Math.max(maxLength, end - start + 1)
    }

    return maxLength
}
