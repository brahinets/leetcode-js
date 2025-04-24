export {countCompleteSubarrays}

function countCompleteSubarrays(nums: number[]): number {
    const uniqueCount: number = new Set<number>(nums).size

    let completeSubarrays: number = 0
    let left: number = 0
    const frequencies: Map<number, number> = new Map<number, number>()

    for (let right: number = 0; right < nums.length; right++) {
        const num: number = nums[right]
        frequencies.set(num, (frequencies.get(num) ?? 0) + 1)

        while (frequencies.size === uniqueCount) {
            completeSubarrays += nums.length - right
            const leftNum: number = nums[left]
            frequencies.set(leftNum, frequencies.get(leftNum)! - 1)

            if (frequencies.get(leftNum) === 0) {
                frequencies.delete(leftNum)
            }

            left++
        }
    }

    return completeSubarrays
}
