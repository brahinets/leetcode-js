export {fourSum}

function fourSum(nums: number[], target: number): number[][] {
    const result: number[][] = []
    const sortedNums: number[] = nums.sort((a: number, b: number): number => a - b)

    for (let i: number = 0; i < sortedNums.length - 3; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue
        }

        for (let j: number = i + 1; j < sortedNums.length - 2; j++) {
            if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) {
                continue
            }

            result.push(...findTwoSum(sortedNums, i, j, target))
        }
    }

    return result
}

function findTwoSum(nums: number[], i: number, j: number, target: number): number[][] {
    let result: number[][] = []
    let left: number = j + 1
    let right: number = nums.length - 1

    while (left < right) {
        const sum: number = nums[i] + nums[j] + nums[left] + nums[right]

        if (sum === target) {
            result.push([nums[i], nums[j], nums[left], nums[right]])

            left = skipDuplicates(nums, left, right, true)
            right = skipDuplicates(nums, left, right, false)
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }

    return result
}

function skipDuplicates(nums: number[], left: number, right: number, isLeft: boolean): number {
    if (isLeft) {
        while (left < right && nums[left] === nums[left + 1]) {
            left++
        }

        return left + 1
    } else {
        while (left < right && nums[right] === nums[right - 1]) {
            right--
        }

        return right - 1
    }
}
