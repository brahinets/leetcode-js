export {pivotArray}

function pivotArray(nums: number[], pivot: number): number[] {
    const result: number[] = []

    let lessI = 0
    let greaterI = nums.length - 1
    for (let i: number = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        if (nums[i] < pivot) {
            result[lessI] = nums[i]
            lessI++
        }

        if (nums[j] > pivot) {
            result[greaterI] = nums[j]
            greaterI--
        }
    }

    while (lessI <= greaterI) {
        result[lessI] = pivot
        lessI++
    }

    return result
}
