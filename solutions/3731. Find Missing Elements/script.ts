export { findMissingElements }

function findMissingElements(nums: number[]): number[] {
    let smallest: number = nums[0]
    let largest: number = nums[0]
    for (const value of nums) {
        if (value < smallest) {
            smallest = value
        }

        if (value > largest) {
            largest = value
        }
    }

    const presentValues: Set<number> = new Set<number>(nums)
    const missingElements: number[] = []
    for (let value: number = smallest; value <= largest; value++) {
        if (!presentValues.has(value)) {
            missingElements.push(value)
        }
    }

    return missingElements
}
