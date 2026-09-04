export {firstStableIndex}

function firstStableIndex(nums: number[], k: number): number {
    const n: number = nums.length
    if (n === 0) {
        return -1
    }

    const prefixMax: number[] = []
    const suffixMin: number[] = []
    prefixMax[0] = nums[0]
    for (let i: number = 1; i < n; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], nums[i])
    }

    suffixMin[n - 1] = nums[n - 1]
    for (let i: number = n - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(suffixMin[i + 1], nums[i])
    }

    for (let i: number = 0; i < n; i++) {
        if (prefixMax[i] - suffixMin[i] <= k) {
            return i
        }
    }

    return -1
}
