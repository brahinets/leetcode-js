export {maxSlidingWindow}

function maxSlidingWindow(nums: number[], k: number): number[] {
    const windowSize: number = k

    const maxs: number[] = []
    for (let i: number = windowSize; i <= nums.length; i++) {
        const window: number[] = nums.slice(i - windowSize, i);
        maxs.push(Math.max(...window))
    }

    return maxs
}
