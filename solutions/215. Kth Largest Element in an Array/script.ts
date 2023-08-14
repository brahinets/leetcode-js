export {findKthLargest}

function findKthLargest(nums: number[], k: number): number {
    let removed: number[] = []

    while (k-- > 0) {
        removed = nums.splice(nums.indexOf(Math.max(...nums)), 1)
    }

    return removed[0]
}
