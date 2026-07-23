export { uniqueXorTriplets }

function uniqueXorTriplets(nums: number[]): number {
    const length: number = nums.length
    if (length < 3) {
        return length
    }

    return 1 << bitLength(length)
}

function bitLength(value: number): number {
    let bits: number = 0
    let remaining: number = value
    while (remaining > 0) {
        bits++
        remaining >>= 1
    }

    return bits
}
