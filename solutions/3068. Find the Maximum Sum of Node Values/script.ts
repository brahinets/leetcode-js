export {maximumValueSum}

function maximumValueSum(nums: number[], k: number, _: number[][]): number {
    const addedValues: number[] = collectAddedValues(nums, k)

    let sum: number = nums.reduce((sum: number, val: number): number => sum + val, 0)
    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
        const pair: number = addedValues[i * 2] + addedValues[i * 2 + 1]

        if (pair > 0) {
            sum += pair
        }
    }

    return sum
}

function collectAddedValues(nums: number[], k: number): number[] {
    const addedValue: number[] = []

    for (let i = 0; i < nums.length; i++) {
        addedValue.push((nums[i] ^ k) - nums[i])
    }

    addedValue.sort((a: number, b: number): number => b - a)

    return addedValue
}
