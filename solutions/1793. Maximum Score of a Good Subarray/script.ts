export {maximumScore}

function maximumScore(nums: number[], k: number): number {
    let maxScore: number = nums[k]
    let goodMin: number = nums[k]

    let left: number = k
    let right: number = k
    while (left > 0 || right < nums.length - 1) {
        const canMoveLeft: boolean = left > 0
        const canMoveRight: boolean = right < nums.length - 1

        if (canMoveLeft && canMoveRight) {
            const betterMoveRight: boolean = nums[right + 1] > nums[left - 1]
            goodMin = Math.min(goodMin, nums[betterMoveRight ? ++right : --left])
        } else {
            goodMin = Math.min(goodMin, nums[canMoveLeft ? --left : ++right])
        }

        maxScore = Math.max(maxScore, goodMin * (right - left + 1))
    }

    return maxScore
}
