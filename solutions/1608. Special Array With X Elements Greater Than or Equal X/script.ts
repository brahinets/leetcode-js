export {specialArray}

function specialArray(nums: number[]): number {
    nums = nums.sort((a: number, b: number) => a - b)

    for (let x = 0; x <= nums.length; x++) {
        let count: number = 0

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= x) {
                count++
            }
        }

        if (count === x) {
            return x
        }
    }

    return -1
}
