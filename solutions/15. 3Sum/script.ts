export {threeSum}

function threeSum(nums: number[]): number[][] {
    const result: number[][] = []

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = 0; j < nums.length; j++) {
            for (let k: number = 0; k < nums.length; k++) {
                if (i === j || i === k || j === k) {
                    continue
                }

                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }

    return deduplicateTriplets(result)
}

function deduplicateTriplets(result: number[][]): number[][] {
    const unique: Map<string, number[]> = new Map<string, number[]>()

    for (const triplet of result) {
        unique.set(triplet.sort((a: number, b: number): number => a - b).join("_"), triplet)
    }

    return [...unique.values()]
}
