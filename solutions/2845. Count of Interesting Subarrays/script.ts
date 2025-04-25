export {countInterestingSubarrays}

function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    let count: number = 0

    let prefixSum: number = 0
    const map: Map<number, number> = new Map<number, number>([[0, 1]])

    for (const num of nums) {
        prefixSum += num % modulo === k ? 1 : 0

        count += map.get((prefixSum - k + modulo) % modulo) || 0

        map.set(prefixSum % modulo, (map.get(prefixSum % modulo) || 0) + 1)
    }

    return count
}
