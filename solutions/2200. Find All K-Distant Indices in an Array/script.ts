export {findKDistantIndices}

function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    const kDistantIndices: number[] = []

    for (let index: number = 0; index < nums.length; index++) {
        if (nums[index] !== key) {
            continue
        }

        const leftBound: number = Math.max(0, index - k)
        const rightBound: number = Math.min(nums.length - 1, index + k)

        for (let i: number = leftBound; i <= rightBound; i++) {
            if (!kDistantIndices.includes(i)) {
                kDistantIndices.push(i)
            }
        }
    }

    return kDistantIndices.sort((a: number, b: number): number => a - b)
}
