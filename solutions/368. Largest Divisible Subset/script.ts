export {largestDivisibleSubset}

function largestDivisibleSubset(nums: number[]): number[] {
    nums.sort((a: number, b: number): number => a - b)

    let maxSubset: number[] = []
    const memo: number[][] = []

    for (let i: number = nums.length - 1; i >= 0; i--) {
        let currentSubset: number[] = []

        for (let j: number = i + 1; j < nums.length; j++) {
            const goodPair: boolean = nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0
            if (goodPair && memo[j].length > currentSubset.length) {
                currentSubset = memo[j]
            }
        }

        memo[i] = [...currentSubset, nums[i]]
        if (memo[i].length > maxSubset.length) {
            maxSubset = memo[i]
        }
    }

    return maxSubset.sort((a: number, b: number): number => a - b)
}
