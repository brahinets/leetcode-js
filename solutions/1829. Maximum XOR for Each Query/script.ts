export {getMaximumXor}

function getMaximumXor(nums: number[], maximumBit: number): number[] {
    const result: number[] = []
    let xor: number = 0

    for (let i: number = 0; i < nums.length; i++) {
        xor ^= nums[i]
        result.push((xor ^ ((1 << maximumBit) - 1)))
    }

    return result.reverse()
}
