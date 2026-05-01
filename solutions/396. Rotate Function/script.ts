export { maxRotateFunction }

function maxRotateFunction(nums: number[]): number {
    const length: number = nums.length
    const sum: number = nums.reduce((accumulator: number, value: number): number => accumulator + value, 0)

    let currentF: number = nums.reduce((accumulator: number, value: number, index: number): number => {
        return accumulator + index * value
    }, 0)

    let maximum: number = currentF

    for (let rotation: number = 1; rotation < length; rotation++) {
        currentF = currentF + sum - length * nums[length - rotation]!

        if (currentF > maximum) {
            maximum = currentF
        }
    }

    return maximum
}
