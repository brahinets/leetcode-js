export {triangleNumber}

function triangleNumber(nums: number[]): number {
    nums.sort((a: number, b: number): number => a - b)

    let count: number = 0

    for (let i: number = 0; i < nums.length - 2; i++) {
        let k: number = i + 2

        for (let j: number = i + 1; j < nums.length - 1 && nums[i] != 0; j++) {
            while (k < nums.length && nums[i] + nums[j] > nums[k]) {
                k++
            }

            count += k - j - 1
        }
    }

    return count
}
