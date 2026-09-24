export { smallestIndex }

const DECIMAL_BASE: number = 10
const NOT_FOUND: number = -1

function smallestIndex(nums: number[]): number {
    for (let index: number = 0; index < nums.length; index++) {
        if (digitSum(nums[index]) === index) {
            return index
        }
    }

    return NOT_FOUND
}

function digitSum(value: number): number {
    let remaining: number = value
    let total: number = 0

    while (remaining > 0) {
        total += remaining % DECIMAL_BASE
        remaining = Math.floor(remaining / DECIMAL_BASE)
    }

    return total
}
