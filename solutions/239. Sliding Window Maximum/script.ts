export {maxSlidingWindow}

function maxSlidingWindow(nums: number[], k: number): number[] {
    const windowSize: number = k

    if (windowSize > nums.length) {
        return []
    }

    const maxs: number[] = []
    for (let i: number = windowSize; i <= nums.length; i++) {
        maxs.push(findMax(nums, i - windowSize, i))
    }

    return maxs
}

function findMax(nums: number[], from: number, to: number): number {
    let max: number | undefined = undefined;

    for (let i: number = from; i < to; i++) {
        if (max === undefined || nums[i] > max) {
            max = nums[i]
        }
    }

    if (max === undefined) {
        throw new Error("Illegal state")
    }

    return max
}
