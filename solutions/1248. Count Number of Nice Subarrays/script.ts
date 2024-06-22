export {numberOfSubarrays}

function numberOfSubarrays(nums: number[], k: number): number {
    let odds: number = 0
    let subArrays: number = 0

    const prefixSum: Map<number,number> = new Map<number,number>([[0,1]])
    for (let i = 0; i < nums.length; i++) {
        odds += (nums[i] % 2 === 1 ? 1 : 0)

        if(prefixSum.has(odds - k)) {
            subArrays += prefixSum.get(odds - k)!
        }

        prefixSum.set(odds, (prefixSum.get(odds) ?? 0) + 1)
    }

    return subArrays
}
