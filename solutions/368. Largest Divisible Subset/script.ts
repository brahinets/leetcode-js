export {largestDivisibleSubset}

function largestDivisibleSubset(nums: number[]): number[] {
    nums.sort((a: number, b: number): number => a - b)

    let max: number[] = []
    const memo: number[][] = []

    for (let i: number = nums.length - 1; i >= 0; i--) {
        let match: number[] = []

        for (let j: number = i + 1; j < nums.length; j++) {
            const goodPair: boolean = nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0
            if (goodPair && memo[j].length > match.length) {
                match = memo[j]
            }
        }

        memo[i] = match.concat(nums[i])
        if (memo[i].length > max.length) {
            max = memo[i]
        }
    }

    return max.sort((a: number, b: number): number => a - b)
}
