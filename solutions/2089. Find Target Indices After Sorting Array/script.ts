export {targetIndices}

function targetIndices(nums: number[], target: number): number[] {
    const smallerCount: number = countSmaller(nums, target)
    const equalCount: number = countEqual(nums, target)
    const indices: number[] = []

    for (let index: number = 0; index < equalCount; index++) {
        indices.push(smallerCount + index)
    }

    return indices
}

function countSmaller(nums: number[], target: number): number {
    let smallerCount: number = 0

    for (const value of nums) {
        if (value < target) {
            smallerCount++
        }
    }

    return smallerCount
}

function countEqual(nums: number[], target: number): number {
    let equalCount: number = 0

    for (const value of nums) {
        if (value === target) {
            equalCount++
        }
    }

    return equalCount
}
