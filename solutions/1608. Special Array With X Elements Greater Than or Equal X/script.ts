export {specialArray}

function specialArray(nums: number[]): number {
    nums = nums.toSorted((a: number, b: number) => a - b)

    let x: number = -1
    for (let candidate = 0; candidate <= nums.length; candidate++) {
        let count: number = 0

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= candidate) {
                count++
            }
        }

        if (count === candidate) {
            x = candidate
        }
    }

    return x
}
