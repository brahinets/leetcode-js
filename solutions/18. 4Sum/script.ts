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

            let left: number = j + 1
            let right: number = sortedNums.length - 1

            while (left < right) {
                const sum: number = sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right]

                if (sum === target) {
                    result.push([sortedNums[i], sortedNums[j], sortedNums[left], sortedNums[right]])

                    while (left < right && sortedNums[left] === sortedNums[left + 1]) {
                        left++
                    }
                    while (left < right && sortedNums[right] === sortedNums[right - 1]) {
                        right--
                    }

                    left++
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }

    return result
}
