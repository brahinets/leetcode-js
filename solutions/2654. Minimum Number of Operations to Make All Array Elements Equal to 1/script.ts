export {minOperations}

function minOperations(nums: number[]): number {
    const ones: number = nums.filter((x: number): boolean => x === 1).length

    if (ones > 0) {
        return nums.length - ones
    }

    let minLen: number = Infinity
    for (let i: number = 0; i < nums.length; i++) {
        let g: number = nums[i]

        for (let j: number = i + 1; j < nums.length; j++) {
            g = gcd(g, nums[j])

            if (g === 1) {
                minLen = Math.min(minLen, j - i + 1)
                break
            }
        }
    }

    return minLen === Infinity ? -1 : minLen + nums.length - 2
}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        [a, b] = [b, a % b]
    }

    return a
}
