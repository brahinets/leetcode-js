export {sortArray}

function sortArray(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums
    }

    const mid: number = Math.floor(nums.length / 2)
    const left: number[] = sortArray(nums.slice(0, mid))
    const right: number[] = sortArray(nums.slice(mid))

    return merge(left, right)
}

function merge(left: number[], right: number[]): number[] {
    const sorted: number[] = []

    while (left.length && right.length) {
        const val: number = left[0] < right[0] ? left.shift()! : right.shift()!
        sorted.push(val)
    }

    return [...sorted, ...left, ...right]
}
