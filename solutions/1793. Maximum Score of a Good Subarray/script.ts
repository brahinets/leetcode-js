export {maximumScore}

function maximumScore(nums: number[], k: number): number {
    let max: number = nums[k]
    let localMin: number = nums[k]

    let left: number = k
    let right: number = k
    while (left > 0 || right < nums.length - 1) {
        const canMoveLeft: boolean = left > 0
        const canMoveRight: boolean = right < nums.length - 1

        const valueIfMoveLeft: number = canMoveLeft ? nums[left - 1] : 0
        const valueIfMoveRight: number = canMoveRight ? nums[right + 1] : 0

        if (valueIfMoveLeft < valueIfMoveRight) {
            localMin = Math.min(localMin, nums[++right])
        } else {
            localMin = Math.min(localMin, nums[--left])
        }

        max = Math.max(max, localMin * (right - left + 1))
    }

    return max
}
