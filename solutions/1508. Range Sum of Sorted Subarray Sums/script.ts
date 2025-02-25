export {rangeSum}

const mod: number = 1e9 + 7

function rangeSum(nums: number[], n: number, left: number, right: number): number {
    const subarraySums: number[] = generateSubarraySums(n, nums)

    return subarraySums
        .sort((a: number, b: number): number => a - b)
        .slice(left - 1, right)
        .reduce((acc: number, curr: number): number => (acc + curr) % mod, 0)
}

function generateSubarraySums(n: number, nums: number[]): number[] {
    const subarraySums: number[] = []

    for (let i: number = 0; i < n; i++) {
        let sum: number = 0

        for (let j: number = i; j < n; j++) {
            sum += nums[j]
            subarraySums.push(sum)
        }
    }

    return subarraySums
}
