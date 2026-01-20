export {minBitwiseArray}

function minBitwiseArray(nums: number[]): number[] {
    const result: number[] = []

    for (const num of nums) {
        if (num === 2) {
            result.push(-1)
            continue
        }

        let mask: number = 2
        while ((num & mask) !== 0) {
            mask <<= 1
        }

        result.push(num ^ (mask >> 1))
    }

    return result
}
