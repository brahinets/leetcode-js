export {maximumCount}

function maximumCount(nums: number[]): number {
    let positives: number = 0
    let negatives: number = 0

    for (let num of nums) {
        if (num > 0) {
            positives++
        } else if (num < 0) {
            negatives++
        }
    }

    return Math.max(positives, negatives)
}
