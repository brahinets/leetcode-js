export {missingNumber}

function missingNumber(nums: number[]): number {
    let i: number = 0
    while (i <= nums.length) {
        if (!nums.includes(i)) {
            return i
        }

        i++
    }

    return i
}
