export {divideArray}

function divideArray(nums: number[]): boolean {
    nums.sort((a: number, b: number): number => a - b)

    for (let i: number = 0; i < nums.length; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return false
        }
    }

    return true
}
