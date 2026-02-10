export { longestBalanced as longestBalancedSubarray }

function longestBalanced(nums: number[]): number {
    let maxLength: number = 0
    const n: number = nums.length

    for (let i = 0; i < n; i++) {
        const evens: Set<number> = new Set<number>()
        const odds: Set<number> = new Set<number>()

        for (let j = i; j < n; j++) {
            if (nums[j] % 2 === 0) {
                evens.add(nums[j])
            } else {
                odds.add(nums[j])
            }

            if (evens.size === odds.size) {
                maxLength = Math.max(maxLength, j - i + 1)
            }
        }
    }

    return maxLength
}
