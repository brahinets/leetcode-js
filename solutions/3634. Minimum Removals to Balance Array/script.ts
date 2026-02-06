export { minRemoval }

function minRemoval(nums: number[], k: number): number {
    const n: number = nums.length
    const sorted: number[] = [...nums].sort((a: number, b: number): number => a - b)

    let maxLen: number = 1
    let right: number = 0

    for (let left: number = 0; left < n; left++) {
        while (right < n && sorted[right] <= k * sorted[left]) {
            right++
        }

        maxLen = Math.max(maxLen, right - left)
    }

    return n - maxLen
}
