export {resultsArray}

function resultsArray(nums: number[], k: number): number[] {
    const result: number[] = []

    for (let start: number = 0; start <= nums.length - k; start++) {
        let isConsecutiveAndSorted: boolean = true

        for (let index: number = start; index < start + k - 1; index++) {
            if (nums[index + 1] !== nums[index] + 1) {
                isConsecutiveAndSorted = false
                break
            }
        }

        if (isConsecutiveAndSorted) {
            result[start] = nums[start + k - 1]
        } else {
            result[start] = -1
        }
    }

    return result
}
