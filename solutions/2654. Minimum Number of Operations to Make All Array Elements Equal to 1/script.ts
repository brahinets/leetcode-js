export {minOperations}

function minOperations(nums: number[]): number {
    let minLen: number = Number.MAX_SAFE_INTEGER

    if (nums.includes(1)) {
        return nums.length - 1
    }

    for (let i = 0; i < nums.length; i++) {
        let g: number = nums[i]
        for (let j = i; j < nums.length; j++) {
            g = gcd(g, nums[j])
            if (g === 1) {
                minLen = Math.min(minLen, j - i + 1)
                break
            }
        }
    }

    if (minLen === Number.MAX_SAFE_INTEGER) {
        return -1
    }

    return minLen - 1 + nums.length - 1
}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        [a, b] = [b, a % b]
    }

    return a
}
