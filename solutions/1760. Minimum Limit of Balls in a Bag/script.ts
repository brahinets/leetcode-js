export {minimumSize}

function minimumSize(nums: number[], maxOperations: number): number {
    let left: number = 1
    let right: number = Math.max(...nums)

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)
        let operations: number = 0

        for (let i: number = 0; i < nums.length; i++) {
            operations += Math.ceil(nums[i] / mid) - 1
        }

        if (operations > maxOperations) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left
}
