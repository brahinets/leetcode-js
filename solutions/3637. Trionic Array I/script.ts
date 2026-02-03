export {isTrionic}

function isTrionic(nums: number[]): boolean {
    const n: number = nums.length

    let p: number = 0
    while (p < n - 1 && nums[p] < nums[p + 1]) {
        p++
    }

    if (p === 0) {
        return false
    }

    let q: number = p
    while (q < n - 1 && nums[q] > nums[q + 1]) {
        q++
    }

    if (q === p || q >= n - 1) {
        return false
    }

    while (q < n - 1) {
        if (nums[q] >= nums[q + 1]) {
            return false
        }
        q++
    }

    return true
}
