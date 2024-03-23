export {largestDivisibleSubset}

function largestDivisibleSubset(nums: number[]): number[] {
    nums.sort((a: number, b: number): number => a - b)

    let maxSubset: number[] = []
    const subsetsDivisibleByIndex: number[][] = []

    for (let i: number = nums.length - 1; i >= 0; i--) {
        let currentSubset: number[] = []

        for (let j: number = i + 1; j < nums.length; j++) {
            const goodPair: boolean = nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0
            if (goodPair && subsetsDivisibleByIndex[j].length > currentSubset.length) {
                currentSubset = subsetsDivisibleByIndex[j]
            }
        }

        subsetsDivisibleByIndex[i] = [nums[i], ...currentSubset]
        if (subsetsDivisibleByIndex[i].length > maxSubset.length) {
            maxSubset = subsetsDivisibleByIndex[i]
        }
    }

    return maxSubset
}
