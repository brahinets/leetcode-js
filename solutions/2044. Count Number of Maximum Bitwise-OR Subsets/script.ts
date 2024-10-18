export {countMaxOrSubsets}

function countMaxOrSubsets(nums: number[]): number {
    let maxOrValue: number = 0
    for (const num of nums) {
        maxOrValue |= num
    }

    let subsetsWithMaxOr: number = 0
    const totalSubsets: number = 1 << nums.length
    for (let subsetMask: number = 0; subsetMask < totalSubsets; subsetMask++) {
        let currentOrValue: number = 0

        for (let i: number = 0; i < nums.length; i++) {
            if (((subsetMask >> i) & 1) === 1) {
                currentOrValue |= nums[i]
            }
        }

        if (currentOrValue === maxOrValue) {
            subsetsWithMaxOr++
        }
    }

    return subsetsWithMaxOr
}
