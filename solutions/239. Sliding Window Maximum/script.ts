import {last} from "../../common/array-utils"

export {maxSlidingWindow}

function maxSlidingWindow(nums: number[], k: number): number[] {
    const windowSize: number = k

    if (windowSize > nums.length) {
        return []
    }

    const maxs: number[] = []

    const usefulNums: number[] = []
    for (let i: number = 0; i < windowSize; i++) {
        while (usefulNums.length !== 0 && nums[i] >= nums[last(usefulNums)!]) {
            usefulNums.pop()
        }

        usefulNums.push(i)
    }
    maxs.push(nums[first(usefulNums)])

    for (let i: number = windowSize; i < nums.length; i++) {
        const beforeWindow: boolean = first(usefulNums) === i - windowSize
        if (beforeWindow) {
            usefulNums.shift()
        }

        while (usefulNums.length !== 0 && nums[i] >= nums[last(usefulNums)!]) {
            usefulNums.pop()
        }

        usefulNums.push(i)
        maxs.push(nums[first(usefulNums)])
    }

    return maxs
}

function first(array: number[]): number {
    return array[0]
}
