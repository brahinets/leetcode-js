export {countValidSelections}

function countValidSelections(nums: number[]): number {
    let count: number = 0
    let nonZeros: number = nums.filter((x: number): boolean => x > 0).length

    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (isValid([...nums], nonZeros, i, -1)) {
                count++
            }

            if (isValid([...nums], nonZeros, i, 1)) {
                count++
            }
        }
    }

    return count
}

function isValid(nums: number[], nonZeros: number, start: number, direction: number): boolean {
    let curr: number = start

    while (nonZeros > 0 && curr >= 0 && curr < nums.length) {
        if (nums[curr] > 0) {
            nums[curr]--
            direction *= -1

            if (nums[curr] === 0) {
                nonZeros--
            }
        }

        curr += direction
    }

    return nonZeros === 0
}
