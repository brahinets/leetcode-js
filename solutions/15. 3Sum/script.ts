export {threeSum}

function threeSum(nums: number[]): number[][] {
    nums = nums.toSorted((a: number, b: number): number => a - b)

    const result: number[][] = []
    for (let i: number = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let j: number = i + 1
        let k: number = nums.length - 1

        while (j < k) {
            const sum: number = nums[i] + nums[j] + nums[k]

            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]])

                while (j < k && nums[j] === nums[j + 1]) {
                    j++
                }

                while (j < k && nums[k] === nums[k - 1]) {
                    k--
                }

                j++
                k--
            } else {
                if (sum < 0) {
                    j++
                } else {
                    k--
                }
            }
        }
    }

    return result
}
