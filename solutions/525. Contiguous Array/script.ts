export {findMaxLength}

function findMaxLength(nums: number[]): number {
    let max: number = 0

    for (let from: number = 0; from < nums.length; from++) {
        let zeros: number = 0
        let ones: number = 0

        for (let to: number = from; to < nums.length; to++) {
            if (0 === nums[to]) {
                zeros++
            } else {
                ones++
            }

            if (zeros === ones) {
                max = Math.max(max, to - from + 1)
            }
        }
    }

    return max
}
