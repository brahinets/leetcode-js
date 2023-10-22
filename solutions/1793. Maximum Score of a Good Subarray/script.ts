export {maximumScore}

function maximumScore(nums: number[], k: number): number {
    let maxGood: number = nums[k]
    let localMin: number = nums[k]

    let left: number = k
    let right: number = k
    while (left > 0 || right < nums.length - 1) {
        const canMoveLeft: boolean = left > 0
        const canMoveRight: boolean = right < nums.length - 1

        if (canMoveLeft && canMoveRight) {
            const betterMoveRight: boolean = nums[right + 1] > nums[left - 1]
            localMin = Math.min(localMin, nums[betterMoveRight ? ++right : --left])
        } else {
            localMin = Math.min(localMin, nums[canMoveLeft ? --left : ++right])
        }

        maxGood = Math.max(maxGood, localMin * (right - left + 1))
    }

    return maxGood
}
