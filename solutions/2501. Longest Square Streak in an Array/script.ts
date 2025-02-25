export {longestSquareStreak}

function longestSquareStreak(nums: number[]): number {
    let longestStreak: number = 0
    const uniqueNumbers: Set<number> = new Set<number>(nums)

    for (const startNumber of nums) {
        let currentStreak: number = 0
        let current: number = startNumber

        while (uniqueNumbers.has(current)) {
            currentStreak++
            if (current * current > 1e5) {
                break
            }

            current = current * current
        }

        longestStreak = Math.max(longestStreak, currentStreak)
    }

    return longestStreak < 2 ? -1 : longestStreak
}
