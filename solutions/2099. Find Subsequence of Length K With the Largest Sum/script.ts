export {maxSubsequence}

function maxSubsequence(nums: number[], k: number): number[] {
    const indexed: NumWithIndex[] = []
    for (let i: number = 0; i < nums.length; i++) {
        indexed.push({index: i, value: nums[i]})
    }

    indexed.sort((a: NumWithIndex, b: NumWithIndex): number => b.value - a.value)

    const topK: NumWithIndex[] = indexed.slice(0, k)

    topK.sort((a: NumWithIndex, b: NumWithIndex): number => a.index - b.index)

    const max: number[] = []
    for (let i: number = 0; i < k; i++) {
        max.push(topK[i].value)
    }

    return max
}

interface NumWithIndex {
    index: number
    value: number
}
