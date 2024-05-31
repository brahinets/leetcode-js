export {singleNumber}

function singleNumber(nums: number[]): number[] {
    const xor: number = nums.reduce((result: number, value: number): number => result ^ value, 0)
    const set: number = xor & -xor

    const result: number[] = [0, 0]
    for (const value of nums) {
        if ((value & set) === 0) {
            result[1] ^= value
        } else {
            result[0] ^= value
        }
    }

    return result
}
