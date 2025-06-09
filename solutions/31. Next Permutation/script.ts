export {nextPermutation}

function nextPermutation(nums: number[]): void {
    let decreaseIndex: number = nums.length - 2

    while (decreaseIndex >= 0 && nums[decreaseIndex] >= nums[decreaseIndex + 1]) {
        decreaseIndex--
    }

    if (decreaseIndex >= 0) {
        let swapIndex: number = nums.length - 1

        while (swapIndex > decreaseIndex && nums[swapIndex] <= nums[decreaseIndex]) {
            swapIndex--
        }

        [nums[decreaseIndex], nums[swapIndex]] = [nums[swapIndex], nums[decreaseIndex]]
    }

    let startIndex: number = decreaseIndex + 1
    let endIndex: number = nums.length - 1

    while (startIndex < endIndex) {
        [nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]]
        startIndex++
        endIndex--
    }
}
