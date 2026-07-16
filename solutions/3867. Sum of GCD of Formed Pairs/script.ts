export { gcdSum }

function gcdSum(nums: number[]): number {
    const n: number = nums.length
    const prefixGcd: number[] = []

    let maxValue: number = 0
    for (let i: number = 0; i < n; i++) {
        maxValue = Math.max(maxValue, nums[i])
        prefixGcd.push(gcd(nums[i], maxValue))
    }

    prefixGcd.sort((a: number, b: number) => a - b)

    let sum: number = 0
    let left: number = 0
    let right: number = n - 1

    while (left < right) {
        sum += gcd(prefixGcd[left], prefixGcd[right])
        left++
        right--
    }

    return sum
}

function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b)
}
